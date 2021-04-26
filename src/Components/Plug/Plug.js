import React from "react";
import styles from "./plug.module.scss";

import metemodernIcon from "../../assets/icons/metemodern-icon";

import cat from "../../assets/images/problemcat.png";

function Plug() {
    return (
        <div className={styles.container}>
            <i>{metemodernIcon}</i>
            <div className={styles.container__content}>
                <div className={styles.description}>
                    <span className={styles.description__info}>
                        We will be launching soon
                    </span>

                    <div className={styles.description__contacts}>
                        <span>Write to us</span>

                        <a href="mailto:metamodernsales@gmail.com">
                            metamodernsales@gmail.com
                        </a>
                    </div>
                </div>

                <img src={cat}></img>
            </div>
        </div>
    );
}

export default Plug;
