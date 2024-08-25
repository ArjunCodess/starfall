"use client";

import { ChangeEvent, FC, useState } from "react";
import { todoType } from "@/types";

interface Props {
    key: string;
    todos: todoType;
    changeTodoText: (id: number, text: string) => void;
    toggleIsTodoDone: (id: number, done: boolean) => void;
    deleteTodoItem: (id: number) => void;
}

const Todo: FC<Props> = ({
    key,
    todos,
    changeTodoText,
    toggleIsTodoDone,
    deleteTodoItem,
}) => {
    // State for handling editing mode
    const [editing, setEditing] = useState(false);

    // State for handling text input
    const [text, setText] = useState(todos.text);

    // State for handling "done" status
    const [isDone, setIsDone] = useState(todos.done);

    // Event handler for text input change
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // Event handler for toggling "done" status
    const handleIsDone = async () => {
        toggleIsTodoDone(todos.id, !isDone);
        setIsDone((prev) => !prev);
    };

    // Event handler for initiating the edit mode
    const handleEdit = () => {
        setEditing(true);
    };

    // Event handler for saving the edited text
    const handleSave = async () => {
        changeTodoText(todos.id, text);
        setEditing(false);
    };

    // Event handler for canceling the edit mode
    const handleCancel = () => {
        setEditing(false);
        setText(todos.text);
    };

    // Event handler for deleting a todos item
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this todos?")) {
            deleteTodoItem(todos.id);
        }
    };

    // Rendering the Todo component
    return (
        <div key={key} className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
            {/* Checkbox for marking the todos as done */}
            <input
                type="checkbox"
                className="text-blue-200 rounded-sm h-4 w-4"
                checked={isDone}
                onChange={handleIsDone}
            />
            {/* Input field for todos text */}
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                readOnly={!editing}
                className={`${todos.done ? "line-through" : ""
                    } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
            />
            {/* Action buttons for editing, saving, canceling, and deleting */}
            <div className="flex gap-1 ml-auto">
                {editing ? (
                    <button
                        onClick={handleSave}
                        className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={handleEdit}
                        className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
                    >
                        Edit
                    </button>
                )}
                {editing ? (
                    <button
                        onClick={handleCancel}
                        className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
                    >
                        Close
                    </button>
                ) : (
                    <button
                        onClick={handleDelete}
                        className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default Todo;