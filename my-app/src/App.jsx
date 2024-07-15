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
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = {
      ...newTodo,
      id: (todos.length + 1).toString(),
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setModalOpen(false);
    setNewTodo({ title: "", description: "" });
  };

  const openModal = () => {
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

  return (
    <div className="App">
      <div className="app-container">
        
        <Card>
          <h1>My Todo List</h1>
          <Button onClick={openModal}>Add +</Button>

          
          <Modal isOpen={modalOpen} onClose={closeModal}>
            <h2>Add Todo</h2>
            <form onSubmit={handleFormSubmit}>
              <Input
                name="title"
                value={newTodo.title}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
              />
              <TextArea
                name="description"
                value={newTodo.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <Button type="submit">Add</Button>
            </form>
          </Modal>
        </Card>

        
        <Card>
          <h2>Active Todos</h2>
          <div>
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} onCheckboxChange={handleCheckboxChange} />
              ))}
          </div>

          <div className="separator"></div>

          <h2>Completed Todos</h2>
          <div>
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} onCheckboxChange={handleCheckboxChange} />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;