import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onclick={props.onclick}
    >
        {props.children}
    </button>
  );
};

export default Button;
