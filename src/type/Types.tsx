export interface Tasks{
    id: number;
    text: string;
    completed: boolean
}

export interface TodoItemProps{
    task: Tasks;
    onDelete: (id:number) => void;
    onToggle: (id:number) => void;
}

export interface ButtonProps {
    buttonName: string;
    onChoose: () => void
}

export interface FilteredItemProps {
    tasks: Tasks[]
}

