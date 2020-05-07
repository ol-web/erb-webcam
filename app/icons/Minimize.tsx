/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import SvgIcon, { SvgIconProps } from "./SvgIcon";

export default function Minimize(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 357 357">
      <g>
        <g id="remove">
          <path d="M357,204H0v-51h357V204z" />
        </g>
      </g>
    </SvgIcon>
  );
}
