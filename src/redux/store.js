import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { filterReducer } from "./filter/reducer";
import todoReducer from "./todo/reducer";

const rootRducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

export const store = createStore(rootRducer, composeWithDevTools())