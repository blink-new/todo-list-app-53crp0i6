
import { motion } from "framer-motion";
import { Check, Trash2, Edit2 } from "lucide-react";
import { useState } from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors
          ${
            todo.completed
              ? "bg-blue-500 border-blue-500"
              : "border-gray-300 hover:border-blue-500"
          }`}
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </button>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex-1">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-2 py-1 border rounded"
            autoFocus
            onBlur={() => setIsEditing(false)}
          />
        </form>
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? "text-gray-400 line-through" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 hover:text-blue-500 transition-colors"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-1 hover:text-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
}