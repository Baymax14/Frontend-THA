import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./actions/action";
import "./App.css";
import { reducerType } from "./reducers";

function App() {
  const [input, setinput] = useState<string>("");
  const todo = useSelector((state: reducerType) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className=="App">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodo(input));
            setinput("");
          }}
        >
          Add Todo
        </button>
      </div>
      <div className=="todo">
        {todo.length !== 0 ? (
          <ul>
            {todo.map((note: string, index: number) => (
              <li key={index}>
                <h3>{note}</h3>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(index));
                  }}
                >
                  Delete Todo
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Create New Todo</h2>
        )}
      </div>
    </div>
  );
}

export default App;
