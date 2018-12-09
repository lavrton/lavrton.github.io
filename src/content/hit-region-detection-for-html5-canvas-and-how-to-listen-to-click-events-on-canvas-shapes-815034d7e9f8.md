---
layout: post
title: "Hit Region Detection For HTML5 Canvas And How To Listen To Click Events On Canvas Shapes"
author: Anton
tags: ["canvas"]
image: img/canvas-events-cover.png
date: "2017-02-22"
draft: false
---

Do you need a simple onClick for your canvas shapes? But canvas doesn’t have API for such listeners. You can listen to events only on whole canvas, not on part of it. I will describe two main approaches how to go around this problem.

> NOTE! I will not use addHitRegion API because for the current moment (year 2017) it is still unstable and not fully supported. But you may take a look at it.

Let start from simple html5 canvas graphics. Imagine we want to draw several circles on a page.

```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create circles to draw
const circles = [
  {
    x: 40,
    y: 40,
    radius: 10,
    color: 'rgb(255,0,0)'
  },
  {
    x: 70,
    y: 70,
    radius: 10,
    color: 'rgb(0,255,0)'
  }
];

// draw circles
circles.forEach(circle => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
});
```

[Open demo](http://codepen.io/lavrton/pen/QdePBY)


Now we can simply listen to clicks on a WHOLE canvas:

```javascript
canvas.addEventListener('click', () => {
   console.log('canvas click');
});
```

__But we want to listen to clicks on a circle. How to do this? How to detect that we clicked on a circle?__

## Approach #1 — use power of math

As we have information about our circle’s coordinates and sizes we can simply use mathematics to detect a click on a circle with trivial calculations. All we need is to get mouse position from click event and check all circles for intersection:

```javascript
unction isIntersect(point, circle) {
  return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
}

canvas.addEventListener('click', (e) => {
  const pos = {
    x: e.clientX,
    y: e.clientY
  };
  circles.forEach(circle => {
    if (isIntersect(mousePoint, circle)) {
      alert('click on circle: ' + circle.id);
    }
  });
});
```

This approach is very common and widely used in many projects. You can easily find math functions for more complex shapes such as rectangles, ellipses, polygons, etc.

This approach is very good and it can be ultra fast if you don’t have a huge number of shapes.

But it is very hard to use this approach for very complex shapes. For example, you are using lines with quadratic curves.

## Approach #2 — emulating hit region

The idea of hit regions is simple — we just need to get pixel under clicked area and find a shape that has the same color:

```javascript
function hasSameColor(color, circle) {
  return circle.color === color;
}

canvas.addEventListener('click', (e) => {
  const mousePos = {
    x: e.clientX - canvas.offsetTop,
    y: e.clientY - canvas.offsetLeft
  };
  // get pixel under cursor
  const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;

  // create rgb color for that pixel
  const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;

  // find a circle with the same colour
  circles.forEach(circle => {
    if (hasSameColor(color, circle)) {
      alert('click on circle: ' + circle.id);
    }
  });
 });
 ```

 But exactly this approach will not work, because it may have shapes with the same color, right? To avoid such collision we should create a special “hit graph” canvas. It will have almost the same shapes but each shape will have a unique color. So we need to generate random colors for each circle:

 ```javascript
 // colorsHash for saving references of all created circles
const colorsHash = {};

function getRandomColor() {
 const r = Math.round(Math.random() * 255);
 const g = Math.round(Math.random() * 255);
 const b = Math.round(Math.random() * 255);
 return `rgb(${r},${g},${b})`;
}



const circles = [{
  id: '1', x: 40, y: 40, radius: 10, color: 'rgb(255,0,0)'
}, {
  id: '2', x: 100, y: 70, radius: 10, color: 'rgb(0,255,0)'
}];

// generate unique colors
circles.forEach(circle => {
  // repeat until we find trully unique colour
  while(true) {
     const colorKey = getRandomColor();
     // if colours is unique
     if (!colorsHash[colorKey]) {
        // set color for hit canvas
        circle.colorKey = colorKey;
        // save reference 
        colorsHash[colorKey] = circle;
        return;
     }
  }
});
```

After that, we need to draw each shape TWICE. First on visible canvas, then on “hit” canvas.

```javascript
circles.forEach(circle => {
  // draw on "scene" canvas first
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
  
  // then draw on offscren "hit" canvas
  hitCtx.beginPath();
  hitCtx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  hitCtx.fillStyle = circle.colorKey;
  hitCtx.fill();
});
```

Now when you click on canvas all you need is to take a pixel on the hit canvas and find a shape with the same color. And this actions are ultra fast and you don’t need to iterate over ALL shapes. Also, it doesn’t matter how complex your shape is. Draw whatever you want and just use different colors for each shape.

[Demo with the full code](http://codepen.io/lavrton/pen/OWKYMr)

## Which approach is better?

It depends. The main bottleneck of the second “hit” approach is that you have to draw shapes twice. So performance can drop twice! But drawing on hit canvas can be simpler. You can skip shadows and strokes there, you may simplify some shapes, for instance, replace a text with just a rectangle. But AFTER drawing is finished this approach can be ultra fast. Because taking a pixel and accessing to a hash of stored shapes is very fast operation.

## Can they be used together?

Sure. Several canvas libs use such mixed approach.

It works in this way:

For each shape, you have to calculate simplified bounding rectangles (x, y, width, height). Then you use first “math” approach for filtering shapes that have an intersection with mouse position and bounding rectangle. After that you can draw hit and test intersection with the second approach for more accurate result.

## Why not just use SVG for such case?

Because sometimes canvas can be more performant and more appropriate for your high-level task. Again, it depends on a task. So canvas vs SVG is out of the context of this post. And if you want to use canvas and have a hit detection you have to use something, right?

## What about other events? Like mousemove, mouseenter, etc?

You just need to add some extra code into described approaches. And you can emulate all other events once you can 100% detect a shape under the mouse.

## Are there any good ready-to-use solutions?

Sure. Just try to google “html5 canvas framework”. But my personal recommendation is http://konvajs.github.io/. Almost forgot, I am a maintainer of this library. Konva uses only second approach and it has support for all mouse and touch events that we usually have for DOM elements (and even more, like drag&drop).



