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
                        className={`${styles.content__description__contacts} ${styles.descriptionFont}`}
                    >
                        <span>Write to us</span>
                        <a href="mailto:metamodernsales@gmail.com">
                            metamodernsales@gmail.com
                        </a>
                    </div>
                    <div
                        className={`${styles.content__description__works} ${styles.descriptionFont}`}
                    >
                        <span>Our works: </span>
                        <a href="https://dribbble.com/metamodern">Dribbble</a>
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
