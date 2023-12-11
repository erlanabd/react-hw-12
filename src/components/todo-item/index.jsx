import React from "react";
import Button from "../button";
import styles from "./styles.module.scss";

const TodoItem = (props) => {
  const { isComplete, text, onClick, onDelete } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      onClick={onClick}
      style={{
        textDecoration: isComplete ? "line-through" : "none",
      }}
      className={styles["todo-list-item"]}
    >
      <div className={styles["todo-list-item__body"]}>
        <div>
          <div style={{backgroundColor: isComplete ? '#9A86F2' : '#fff'}} className={styles["checkbox-wrap"]}>
            {isComplete ? <i className={styles["checkmark-icon"]}></i> : ''}
          </div>
        </div>
        {text}
      </div>

      <Button onClick={handleDelete}>
        <i className={styles["btn-icon"]}></i>
      </Button>

      
    </div>
  );
};

export default TodoItem;
