import React from "react";
import routes from "../constants/routes";
import styles from "./Credits.css";
import Close from "../icons/Close";
import Maximize from "../icons/Maximize";
import Minimize from "../icons/Minimize";
import Webcam from "../icons/Webcam";
import BottomLink from "./BottomLink";

interface Icon {
  owner: string;
  license: (arg: Icon) => string;
  url: string;
  title?: string;
  Component: any;
}

export default function Credits() {
  const getCCLicense = (obj: Icon) =>
    `"${obj.title}" designed by <a target="_blank" href="${obj.url}">${obj.owner}</a> from <a target="_blank"  href="https://www.flaticon.com">Flaticon</a> is licensed under <a target="_blank" href="https://creativecommons.org/licenses/by/3.0/legalcode">CC BY 3.0</a> / file structure and format have been changed`;

  const getFlaticonLicense = (obj: Icon) =>
    `designed by <a target="_blank" href="${obj.url}">${obj.owner}</a> from <a target="_blank" href="https://www.flaticon.com">Flaticon</a>  / file structure and format have been changed`;

  const icons: Icon[] = [
    {
      owner: "Freepik",
      license: getFlaticonLicense,
      url: "https://www.flaticon.com/authors/freepik",
      Component: Webcam
    },
    {
      owner: "Google",
      license: getCCLicense,
      url: "https://www.flaticon.com/authors/google",
      title: "Horizontal Line Remove Button",
      Component: Minimize
    },
    {
      owner: "Gregor Cresnar",
      license: getFlaticonLicense,
      url: "https://www.flaticon.com/authors/gregor-cresnar",
      Component: Maximize
    },
    {
      owner: "Google",
      license: getCCLicense,
      url: "https://www.flaticon.com/authors/google",
      title: "Close Button",
      Component: Close
    }
  ];

  return (
    <div>
      <ul className={styles.iconList}>
        {icons.map((icon, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={key}>
            <div style={{ marginRight: "3px" }}>
              <icon.Component />
            </div>
            <div
              style={{ width: "100%" }}
              dangerouslySetInnerHTML={{ __html: icon.license(icon) }}
            />
          </li>
        ))}
      </ul>

      <BottomLink to={routes.HOME}>Home</BottomLink>
    </div>
  );
}
