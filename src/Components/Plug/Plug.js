import React from "react";
import styles from "./plug.module.scss";

import metemodernIcon from "../../assets/icons/metemodern-icon";
import metemodernBigIcon from "../../assets/icons/metemodern-big-icon";

import cat from "../../assets/images/problemcat.png";

function Plug() {
    return (
        <div className={styles.container}>
            <i>{metemodernIcon}</i>
            <div className={styles.content}>
                <div className={styles.content__description}>
                    <i>{metemodernBigIcon}</i>

                    <span className={styles.content__description__info}>
                        We will be launching soon
                    </span>

                    <div className={styles.content__description__contacts}>
                        <span>Write to us</span>
                        <br />
                        <a href="mailto:metamodernsales@gmail.com">
                            metamodernsales@gmail.com
                        </a>
                    </div>
                </div>

                <div className={styles.content__imgContainer}>
                    <img src={cat} />
                </div>
            </div>
        </div>
    );
}

export default Plug;
