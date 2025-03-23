import { useState } from "react";
import { Tasks} from "../type/Types";
import ListForm from "../componnets/ListForm"

function TodoList () {
    const [todos, setTodos] = useState<Tasks[]>([])
    const [input, setInput] = useState<string>('')

    const handleSubmitTask = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() !== ''){
            setTodos([...todos, {id:Date.now(), text: input, completed: false}])
            setInput('')
        }   
    }

    const handleRemoveTask = (id:number):void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
      <>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={handleSubmitTask}>Add</button>
        </div>
        <div>
            {todos.map( todo=> <ListForm key={todo.id} task={todo} onDelete={handleRemoveTask}/>

            )}
        </div>
      </>
    );
}

export default TodoList