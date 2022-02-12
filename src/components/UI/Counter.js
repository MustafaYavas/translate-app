import React from "react";
import styles from "./Counter.module.css"

const Counter = (props) => {
    return (
        <div className={`${styles["div-position"]}`}>
            <p className={`${styles["text-color"]} ${styles["text-position"]}`}>{props.textLength}/750</p>
        </div>
    )
}

export default Counter;