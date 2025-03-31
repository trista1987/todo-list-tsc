import { FilteredItemProps } from "../type/Types";

function FilteredTasks ({tasks}: FilteredItemProps) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.text}
                </li>
            ))}
        </ul>


    );
}

export default FilteredTasks