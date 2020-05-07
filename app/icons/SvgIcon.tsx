/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export interface SvgIconProps {
  viewBox?: string;
  children?: React.ReactNode;
  fill?: string;
  height?: string;
  width?: string;
  stroke?: string;
  strokeWidth?: string;
}

export default function SvgIcon(passedProps: SvgIconProps) {
  const {
    fill,
    height,
    width,
    stroke,
    strokeWidth,
    children,
    ...props
  } = passedProps;

  return (
    <svg
      style={{ display: "block", stroke, strokeWidth }}
      fill={fill || "var(--text)"}
      height={height || "1em"}
      width={width || "1em"}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {children}
    </svg>
  );
}
