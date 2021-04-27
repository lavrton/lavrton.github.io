import React from 'react';
import Konva from 'konva';
import { SceneCanvas } from 'konva/lib/Canvas';
import { Navbar, Button } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';

export const Preview = observer(({ store }) => {
  const [previewVisible, setPreviewVisible] = React.useState(true);

  const canvasRef = React.useRef();

  React.useEffect(() => {
    const canvas = new SceneCanvas({
      width: store.width,
      height: store.height,
      pixelRatio: 1,
    });
    canvasRef.current = canvas;

    const page = Konva.stages[0].findOne('.elements-container');
    document.querySelector('.preview-container').appendChild(canvas._canvas);
    setInterval(() => {
      canvas.getContext().clear();
      page.drawScene(canvas, page);
    }, 100);
  }, []);

  React.useEffect(() => {
    canvasRef.current.setSize(store.width, store.height);
    Object.assign(canvasRef.current._canvas.style, {
      position: '',
      width: store.width / 5 + 'px',
      height: store.height / 5 + 'px',
    });
  }, [store.width, store.height]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: 0,
        zIndex: 10,
        zIndex: 10000,
        transformOrigin: 'top left',
        background: 'white',
        border: '1px solid rgba(16, 22, 26, 0.2)',
        borderRadius: '5px',
        overflow: 'hidden',
      }}
    >
      <Navbar>
        <Navbar.Group align="right">
          {previewVisible && (
            <Button
              icon="eye-off"
              minimal
              onClick={() => {
                setPreviewVisible(false);
              }}
            >
              Hide preview
            </Button>
          )}
          {!previewVisible && (
            <Button
              icon="eye-on"
              minimal
              onClick={() => {
                setPreviewVisible(true);
              }}
            >
              Show preview
            </Button>
          )}
        </Navbar.Group>
      </Navbar>
      <div className="preview-container" style={{ display: previewVisible ? '' : 'none' }} />
    </div>
  );
});
