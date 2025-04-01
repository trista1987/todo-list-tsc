import { TodoItemProps } from "../type/Types";

function TaskForm({ task, onDelete, onToggle }: TodoItemProps) {
  return (
    <>
      <ul>
        <li>
          <input
            checked={task.completed}
            type="checkbox"
            onChange={() => onToggle(task.id)}
          />
          <label
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </label>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      </ul>
    </>
  );
}

export default TaskForm;
