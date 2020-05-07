import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./BottomLink.css";

export default function BottomLink({ to, children }: LinkProps) {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
}
