import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import { Redirect } from "react-router-dom";
import routes from "../constants/routes";
import styles from "./Home.css";
import BottomLink from "./BottomLink";

export default function Home() {
  const [deviceId, setDeviceId] = useState<null | string>(null);
  const [devices, setDevices] = useState([]);

  const handleDevices = useCallback(
    mediaDevices =>
      setDevices(
        mediaDevices.filter(
          (info: MediaDeviceInfo) => info.kind === "videoinput"
        )
      ),
    [setDevices]
  );

  useEffect(() => {
    let ignore = false;
    const fn = async () => {
      try {
        const foundDevices = await navigator.mediaDevices.enumerateDevices();
        if (!ignore) handleDevices(foundDevices);
      } catch (e) {
        // continue regardless of error
      }
    };

    fn();

    return () => {
      ignore = true;
    };
  }, [handleDevices]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDeviceId(e.target.value);
  };

  if (deviceId) {
    return <Redirect to={`${routes.COUNTER}${deviceId}`} />;
  }

  return (
    <div className={styles.container} data-tid="container">
      <div className={styles.cameraChoose}>
        <select onChange={onChange} value="">
          <option value="" disabled>
            Select a camera
          </option>
          {devices.map((device: MediaDeviceInfo) => (
            <option value={device.deviceId} key={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>

        <p className={styles.version}>v1.3.0</p>
      </div>

      <BottomLink to={routes.CREDITS}>Credits</BottomLink>
    </div>
  );
}
