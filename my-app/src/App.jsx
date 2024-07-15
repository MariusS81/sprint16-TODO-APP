import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ id: null, title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTodo({
      ...currentTodo,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentTodo.id) {
      setTodos(todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, completed: todo.completed } : todo
      ));
    } else {
      const newTodoItem = {
        ...currentTodo,
        id: (todos.length + 1).toString(),
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
    }
    setModalOpen(false);
    setCurrentTodo({ id: null, title: "", description: "" });
  };

  const openModal = (todo) => {
    setCurrentTodo(todo ? todo : { id: null, title: "", description: "" });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCheckboxChange = (id, completed) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <h1>My Todo List</h1>
          <Button onClick={() => openModal(null)}>Add +</Button>

          <Modal isOpen={modalOpen} onClose={closeModal}>
            <h2>{currentTodo.id ? "Edit Todo" : "Add Todo"}</h2>
            <form onSubmit={handleFormSubmit}>
              <Input
                name="title"
                value={currentTodo.title}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
              />
              <TextArea
                name="description"
                value={currentTodo.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <Button type="submit">{currentTodo.id ? "Save" : "Add"}</Button>
            </form>
          </Modal>
        </Card>

        <Card>
          <h2>Active Todos</h2>
          <div>
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onCheckboxChange={handleCheckboxChange}
                  onDelete={handleDelete}
                  onEdit={openModal}
                />
              ))}
          </div>

          <div className="separator"></div>

          <h2>Completed Todos</h2>
          <div>
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onCheckboxChange={handleCheckboxChange}
                  onDelete={handleDelete}
                  onEdit={openModal}
                />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;