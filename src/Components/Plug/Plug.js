import React from "react";
import styles from "./plug.module.scss";

import cat from "../../assets/images/problemcat.png";

function Plug() {
  return (
    <div className={styles.container}>
      <div className={styles.container__topSpaser} />
      <div className={styles.content}>
        <div className={styles.content__description}>
          <span className={styles.content__description__info}>
            We will launch soon
          </span>

          <div
            className={`${styles.content__description__mail} ${styles.descriptionFont}`}
          >
            <span>Write to us</span>
            <a href="mailto:metamodern.dev@gmail.com">metamodern.dev@gmail.com</a>
          </div>

          <div
            className={`${styles.content__description__phone} ${styles.descriptionFont}`}
          >
            <span>Call us</span>
            <a href="tel:+375295704513">+375 (29) 570-45-13</a>
          </div>

          <div
            className={`${styles.content__description__works} ${styles.descriptionFont}`}
          >
            <span>Our works: </span>
            <a href="https://dribbble.com/metamodern" target="_blank">
              Dribbble
            </a>
          </div>
        </div>

        <div className={styles.content__imgContainer}>
          <img src={cat} alt={"cat"} />
        </div>
      </div>
      <div className={styles.container__bottomSpaser} />
    </div>
  );
}

export default Plug;
