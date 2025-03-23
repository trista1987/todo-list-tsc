import {TodoItemProps} from "../type/Types"

function ListForm ({task, onDelete }:TodoItemProps) {
    return (
        <li>
            <span >
                {task.text}
            </span>
            <button onClick={()=>onDelete(task.id)}>Delete</button>
        </li>
    )
}

export default ListForm