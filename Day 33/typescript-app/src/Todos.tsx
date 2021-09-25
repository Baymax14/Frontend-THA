import { useState, useContext } from "react"

import TodoList from "./TodoList"

interface TodoType {
    title: string,
    done: boolean
}

const Todos = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [data, setData] = useState<string>("")
   
    return (
        <div className=="todos dark">
            <input type="text" value={data} onChange={e => setData(e.target.value)}/>
            <button onClick={() => {
              setTodos([...todos, {title: data, done: false}])
              setData("")
            }}>Add Todo</button>
        {todos.map((todo, index) => {
          return <TodoList title={todo.title} done={todo.done} todos={todos} setTodos={setTodos} index={index} />
        })}
      </div>
    )
}
export default Todos;