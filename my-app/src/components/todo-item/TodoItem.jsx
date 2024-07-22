import React from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/Checkbox";

const TodoItem = ({ todo, onCheckboxChange, onEdit, onDelete }) => {
  const handleCheckboxChange = (checked) => {
    onCheckboxChange(todo.id, checked);
  };

  const handleEditClick = () => {
    onEdit(todo);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!todo.completed}
            onChange={handleCheckboxChange}
          />
          <h4>{todo.title}</h4>
        </div>
        <div>
          <i className="fa fa-pencil" aria-hidden="true" onClick={handleEditClick}></i>
          <i className="fa fa-trash" aria-hidden="true" onClick={handleDeleteClick}></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;