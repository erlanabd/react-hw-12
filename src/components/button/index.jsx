import React from "react";
import styles from "./styles.module.scss"

const Button = ({ children, onClick, type }) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={styles['btn']}>
        {children}
      </button>
    </div>
  );
};

export default Button;
