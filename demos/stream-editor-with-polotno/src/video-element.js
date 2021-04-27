import React from "react";
// polotno is made with mobx library
// we will need its tools to make reactive components
import { observer } from "mobx-react-lite";
// import Konva components
import { Image } from "react-konva";

import { Navbar, Alignment, HTMLSelect } from "@blueprintjs/core";
// import Polotno API methods
import { unstable_registerShapeComponent } from "polotno/config";
import { unstable_registerToolbarComponent } from "polotno/config";
import { unstable_registerShapeModel } from "polotno/config";

import { useUserStream, useDisplayStream } from "./streams";

// define our model
// we need to provide all default values
unstable_registerShapeModel({
  type: "video",
  source: "user",
  width: 100,
  height: 100,
  quality: "good"
});

const useVideo = (stream) => {
  const video = React.useMemo(() => {
    return document.createElement("video");
  }, [stream]);

  React.useEffect(() => {
    if (!stream) {
      return;
    }
    video.muted = true;
    video.autoPlay = true;
    video.srcObject = stream;
    video.onloadedmetadata = function (e) {
      video.play();
    };
  }, [stream]);
  return video;
};

const INTERVALS = {
  high: 1000 / 50,
  good: 1000 / 30,
  low: 1000 / 5
};

// function to calculate crop values from source image, its visible size and a crop strategy
function getCrop(video, { width, height }) {
  const aspectRatio = width / height;

  let newWidth;
  let newHeight;

  const videoRatio = video.videoWidth / video.videoHeight;

  if (aspectRatio >= videoRatio) {
    newWidth = video.videoWidth;
    newHeight = video.videoWidth / aspectRatio;
  } else {
    newWidth = video.videoHeight * aspectRatio;
    newHeight = video.videoHeight;
  }

  const x = (video.videoWidth - newWidth) / 2;
  const y = (video.videoHeight - newHeight) / 2;

  return {
    x: x,
    y: y,
    width: newWidth,
    height: newHeight
  };
}

export const VideoElement = observer(({ element, store }) => {
  const stream =
    element.source === "user" ? useUserStream() : useDisplayStream();
  const video = useVideo(stream);

  const shapeRef = React.useRef();

  React.useEffect(() => {
    const interval = setInterval(() => {
      shapeRef.current.getLayer().batchDraw();
    }, INTERVALS[element.quality]);
    return () => clearInterval(interval);
  }, [element.quality, video]);

  const [videoLoaded, setVideoLoaded] = React.useState();
  React.useEffect(() => {
    video.onload = () => {
      setVideoLoaded(true);
    };
  }, []);

  const crop = getCrop(video, element);

  const onTransform = (e) => {
    // transformer is changing scale of the node
    // and NOT its width or height
    // but in the store we have only width and height
    // to match the data better we will reset scale on transform end
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // we will reset it back
    node.scaleX(1);
    node.scaleY(1);
    element.set({
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(5, node.height() * scaleY),
      rotation: node.rotation()
    });
  };

  return (
    <Image
      name="element"
      id={element.id}
      ref={shapeRef}
      draggable
      image={video}
      width={element.width}
      height={element.height}
      x={element.x}
      y={element.y}
      rotation={element.rotation}
      crop={crop}
      onDragEnd={onTransform}
      onTransform={onTransform}
    />
  );
});

// now we can register canvas component
unstable_registerShapeComponent("video", VideoElement);

const Toolbar = observer(({ store }) => {
  const element = store.selectedElements[0];

  return (
    <Navbar.Group align={Alignment.LEFT}>
      <HTMLSelect
        value={element.quality}
        onChange={(e) => {
          element.set({ quality: e.target.value });
        }}
      >
        <option value="high">Hight quality</option>
        <option value="good">Good quality</option>
        <option value="low">Low quality</option>
      </HTMLSelect>
    </Navbar.Group>
  );
});

unstable_registerToolbarComponent("video", Toolbar);
