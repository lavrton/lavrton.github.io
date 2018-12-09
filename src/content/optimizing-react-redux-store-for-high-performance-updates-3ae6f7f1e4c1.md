---
layout: post
title: "Optimizing react-redux store for high performance updates"
author: Anton
tags: ["react", "performance"]
image: img/redux-perf-cover.png
date: "2016-12-22"
draft: false
---

# Optimizing react-redux store for high performance updates

How to structure your redux store to improve rendering performance?

This post is continuation of [Tips to optimise rendering of a set of elements in React](/how-to-optimise-rendering-of-a-set-of-elements-in-react-ad01f5b161ae)


> Note: this post designed specially for React + Redux applications. Also, this tip works for react-redux v5. I was not able to apply the same technique with react-redux v4. Probably some of its inner listeners were too slow.

The very common way to store some set of elements in an application is to store items as an array:

```javascript
const state = {
  targets: [{id: 'target1', radius: 10}, {id: 'target2', radius: 2}]
};
```

Probably you will have a component in your application that will render the set of elements:

```javascript
const TargetsList = connect(state => ({targets: state.targets}))(
  ({ targets }) =>
    <ul>
      { targets.map((target) => <TargetView key={target.id} target={target} />) }
    </ul>
);
```

If you need to update an item in the list you will have to update whole list:

```javascript
function appReducer(state, action) {
  if (action.type === 'UPDATE') {
    return {
      target: state.target.map((target) => {
        if (target.id === action.id) {
           return {
              ...target,
              radius: action.radius
           };
        } else {
          return target;
        }
      }) 
    }
  }
  // some other code
}
```

Every update of an item will produce update of the whole “TargetsList” view.

I created a simple demo with such approach (with testing code): http://codepen.io/lavrton/pen/xRgYbL


Updating an item in the array of size 1000 takes about __~21ms__ on my machine. In the [previous post](/how-to-optimise-rendering-of-a-set-of-elements-in-react-ad01f5b161ae), I described an approach of optimizing such rendering by making child components “smarter” and adding some logic into “shouldComponentUpdate” of list component. But almost the same result can be achieved much simpler by changing state shape.


## How to optimize?

If you are using https://github.com/reactjs/react-redux you can simply improve performance by changing state shape to:

```javascript
const state = {
  targetsOrder: ['id-1', 'id-2'],
  targets: {
    'id-1': { id: 'id-1', radius: 10 },
    'id-2': { id: 'id-2', radius: 20 },
  }
};
```

Then we will need to change “TargetsList” a bit:

```javascript
const TargetsList = connect(state => ({targetsOrder: state.targetsOrder}))(
  ({ targetsOrder }) =>
    <ul>
      { targetsOrder.map((id) => <TargetView key={id} targetId={id} />) }
    </ul>
);
```

Please, note, that in this case, I am passing item ID into child view, not the whole item. In this case “TargetView” can not be “dumb” component. It should be connected to store:

```javascript
onst TargetView = connect(
  (state, ownProps) => ({target: state.targets[ownProps.targetId]})
)(({ target }) => {
  // your render logic
  return <Circle radius={target.radius} />;
});
```

As `TargetView` is connected to store, it will update itself when its “target” data is updated. It is important that if we update an item in a list, “TargetList” will be NOT updated, because “targetsOrder” is the same. In the same cases, it may improve performance a lot. Demo: http://codepen.io/lavrton/pen/ZBLrWp

> Updating an item takes 2.2ms on my machine. It is almost 10x faster then with previous shape of the state!