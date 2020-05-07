/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import SvgIcon, { SvgIconProps } from "./SvgIcon";

export default function Maximize(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 485.6 485.6">
      <g>
        <g>
          <path d="M0,455.7h358.5v-298H0V455.7z M63.4,221.1h231.5v171.1H63.4V221.1z M158.9,29.9h326.7v266.3h-63.5V93.4H158.9V29.9z" />
        </g>
      </g>
    </SvgIcon>
  );
}
