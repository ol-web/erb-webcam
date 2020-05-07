import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { saveAs } from "file-saver";
import { RouteComponentProps } from "react-router";

import BottomLink from "./BottomLink";
import routes from "../constants/routes";
import styles from "./Camera.css";

const SCREENSHOT_EXT = "png";

export default function Camera(props: RouteComponentProps) {
  const { deviceId } = props.match.params;
  const webcamRef = useRef<null | Webcam>(null);
  const [mirrored, setMirrored] = useState(false);
  const captureScreenshot = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current?.getScreenshot();
    saveAs(imageSrc, `image.${SCREENSHOT_EXT}`);
  }, [webcamRef]);

  const goFullscreen = useCallback(() => {
    if (!webcamRef.current) return;
    document.querySelector("video")?.requestFullscreen();
  }, [webcamRef]);

  const toggleMirroring = useCallback(() => {
    if (!webcamRef.current) return;
    setMirrored(val => !val);
  }, [webcamRef]);

  const webcamProps = {
    mirrored,
    audio: false,
    forceScreenshotSourceSize: false,
    screenshotQuality: 1,
    ref: webcamRef,
    screenshotFormat: `image/${SCREENSHOT_EXT}`,
    width: "100%",
    height: "100%",
    videoConstraints: {
      //  width: 1280,
      //  height: 720,
      // facingMode: "user"
      deviceId
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        <button
          type="button"
          onClick={captureScreenshot}
          className={styles.btn}
        >
          Capture photo
        </button>
        <button type="button" onClick={goFullscreen} className={styles.btn}>
          Go fullscreen
        </button>
        <button type="button" onClick={toggleMirroring} className={styles.btn}>
          Toggle mirroring
        </button>
      </div>

      <div className={styles.webcamContainer}>
        <Webcam {...webcamProps} />
      </div>

      <BottomLink to={routes.HOME}>Choose camera</BottomLink>
    </div>
  );
}

/*
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {counter}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={increment}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={styles.btn}
          onClick={decrement}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={incrementIfOdd}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => incrementAsync()}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
      */
