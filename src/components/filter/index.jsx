import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../../redux/filter/actions";
import { TYPE_OF_FILTER } from "../../redux/filter/reducer";
import Button from "../button";
import styles from "./styles.module.scss";

const FilterBtns = () => {
    const dispatch = useDispatch()
    const handleFilterTodo = (filter) => {
        dispatch(filterTodo(filter));
      };
      
  return (
    <div className={styles['filter-btns-wrap']}>
      <Button onClick={() => handleFilterTodo(TYPE_OF_FILTER.SHOW_ALL)}>
        show all
      </Button>
      <Button onClick={() => handleFilterTodo(TYPE_OF_FILTER.SHOW_ACTIVE)}>
        show active
      </Button>
      <Button onClick={() => handleFilterTodo(TYPE_OF_FILTER.SHOW_COMPLETED)}>
        show completed
      </Button>
    </div>
  );
};

export default FilterBtns;
