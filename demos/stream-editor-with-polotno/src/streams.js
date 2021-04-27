import React from "react";

var constraints = { video: true, audio: false };
let userPromise;
function getUserMedia() {
  if (!userPromise) {
    userPromise = navigator.mediaDevices
      .getUserMedia(constraints)
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }
  return userPromise;
}

let displayPromise;
function getDisplayMedia() {
  if (!navigator.mediaDevices.getDisplayMedia) {
    return Promise.reject(null);
  }
  if (!displayPromise) {
    displayPromise = navigator.mediaDevices
      .getDisplayMedia(constraints)
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }
  return displayPromise;
}

export const useUserStream = () => {
  const [stream, setStream] = React.useState(null);

  React.useEffect(() => {
    getUserMedia().then(function (mediaStream) {
      setStream(mediaStream);
    });
  }, []);

  return stream;
};

export const useDisplayStream = () => {
  const [stream, setStream] = React.useState(null);

  React.useEffect(() => {
    getDisplayMedia().then(function (mediaStream) {
      setStream(mediaStream);
    });
  }, []);

  return stream;
};
