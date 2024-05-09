import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  // const [updatedDesc, setUpdatedDesc] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/todos').then((res) => {
      setTodos(res.data);
    });
  },[todos]);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      await axios.post('http://localhost:5000/create', { description: newTodo }).then((res) => {
        setTodos([...todos, res.data]);
        setNewTodo('');
      });
    }
  };

  const handleUpdate = async(id) => {
    const newDescription = prompt('Enter new description:');
    if (newDescription !== null && newDescription.trim() !== '') {
      await axios.put(`http://localhost:5000/todos/${id}`, { description: newDescription });
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.description = newDescription;
          }
          return todo;
        })
      );
    }
  };

  const handleDelete = async(id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Enter description..."
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.description}
            <button onClick={() => handleUpdate(todo.id)}>Update</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
