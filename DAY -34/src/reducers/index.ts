import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";


const rootReducer = combineReducers({
    todo : TodoReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;


export default rootReducer;