import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <>

        {
            props.show ? 
                <div className="position-relative">
                    <button 
                        className={`fas fa-times bg-transparent position-absolute top-0 end-0 text-light me-2 mt-2 ${styles["button__border"]}`}
                        onClick={props.onClick}
                    />
                </div> : null
        }
        </>
    )
}

export default Button;