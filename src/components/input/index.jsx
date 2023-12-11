import React from "react";
import Button from "../button";
import styles from "./styles.module.scss";

const Input = ({ value, onChange, onClick, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className={styles['form']}>
        <input
          className={styles["input-wrap"]}
          placeholder='Add Todo'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
        />
      </form>
    </div>
  );
};

export default Input;
