import { useState } from "react";
import { Tasks } from "../type/Types";
import TaskForm from "./TaskForm";
import Button from "./Button";

function TodoList() {
  const [todos, setTodos] = useState<Tasks[]>([]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">(
    "all"
  );
  const [showList, setShowList] = useState<boolean>(false);

  const handleSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
      setFilter("all");
      setShowList(true);
    }
  };

  const handleRemoveTask = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true;
  });

  const handleCompleteAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

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
        <Button
          buttonName="All"
          onChoose={() => {
            setFilter("all");
            setShowList(true);
          }}
        />
        <Button
          buttonName="Completed"
          onChoose={() => {
            setFilter("completed");
            setShowList(true);
          }}
        />
        <Button
          buttonName="Uncompleted"
          onChoose={() => {
            setFilter("uncompleted");
            setShowList(true);
          }}
        />
      </div>
      {showList && (
        <div>
          {filteredTodos.map((todo) => (
            <TaskForm
              key={todo.id}
              task={todo}
              onDelete={handleRemoveTask}
              onToggle={handleToggle}
            />
          ))}
          <p>{filteredTodos.length} Tasks</p>
          <button onClick={handleCompleteAll}>Complete all</button>
        </div>
      )}
    </>
  );
}

export default TodoList;
