import React from "react";
import { SidePanel, DEFAULT_SECTIONS } from "polotno/side-panel/side-panel";
import { SectionTab } from "polotno/side-panel/tab-button";

import { useUserStream, useDisplayStream } from "./streams";

import FaVideo from "@meronex/icons/fa/FaVideo";
import { observer } from "mobx-react-lite";

const Video = ({ stream, onSelect, ...props }) => {
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    if (!stream) {
      return;
    }
    videoRef.current.srcObject = stream;
    videoRef.current.onloadedmetadata = function (e) {
      videoRef.current.play();
    };
  }, [stream]);
  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      style={{
        width: "100%",
        marginBottom: "10px",
        boxShadow: "0 0 2px black",
        cursor: "pointer"
      }}
      draggable
      onDragStart={() => {
        window.__polotnoDrop = ({ x, y }) => {
          onSelect({ x, y });
        };
      }}
      onDragEnd={(e) => {
        window.__polotnoDrop = null;
      }}
      onClick={() => {
        onSelect();
      }}
      {...props}
    />
  );
};

// define the new custom section
const VideoSection = {
  name: "video",
  Tab: (props) => (
    <SectionTab name="Video" {...props}>
      <FaVideo />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: observer(({ store }) => {
    const userStream = useUserStream();
    const displayStream = useDisplayStream();

    const handleVideoSelect = (source, pos) => {
      store.activePage.addElement({
        type: "video",
        source,
        x: pos ? pos.x : store.width / 2 - 50,
        y: pos ? pos.y : store.height / 2 - 50
      });
    };
    return (
      <div>
        <p>You can add your video streams into the canvas.</p>
        <Video
          stream={userStream}
          onSelect={(pos) => {
            handleVideoSelect("user", pos);
          }}
        />
        <Video
          stream={displayStream}
          onSelect={(pos) => {
            handleVideoSelect("display", pos);
          }}
        />
      </div>
    );
  })
};

// we will have just two sections
const sections = [...DEFAULT_SECTIONS, VideoSection];

export const CustomSidePanel = ({ store }) => {
  return <SidePanel store={store} sections={sections} defaultSection="video" />;
};
