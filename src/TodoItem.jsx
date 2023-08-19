// TodoItem.jsx
import React from "react";

export default function TodoItem({completed, title, id, toggleTodo, deleteTodo}) {
  return (
    <li >
      <label>
        <input
            onChange={(e) => toggleTodo(e.target.checked, id)}
          type="checkbox"
          checked={completed}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
