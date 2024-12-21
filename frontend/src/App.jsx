import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ErrorMessage from './components/ErrorMessage';
import EditTodoModal from './components/EditTodoModal'

const API_URL = 'http://localhost:8000/api/todos/';

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setError(null);
    } catch (err) {
      if (err.response && err.response.data) {
        const validationErrors = err.response.data;
        setError(validationErrors.response)
      } else {
        setError("Unexpected error during the process")
      }

    }
  };

  const sortTodos = (todos) => {
    return [...todos].sort((a, b) => {
      const aCompleted = a.completed ? 1 : 0;
      const bCompleted = b.completed ? 1 : 0;
      if (aCompleted !== bCompleted) {
        return aCompleted - bCompleted;
      }
      return b.id - a.id
    });
  };

  const addTodo = async (todoName) => {
    try {
      const response = await axios.post(API_URL, { todo_name: todoName, completed: false });
      setTodos(sortTodos([...todos, response.data]));
      setError(null);
    } catch (err) {
      if (err.response && err.response.data) {
        const validationErrors = err.response.data;
        setError(validationErrors.todo_name)
      } else {
        setError("Unexpected error during the process")
      }

    }

  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.patch(`${API_URL}${id}/`, { completed: completed });
      setTodos(sortTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )))
      setError(null);
    } catch (err) {
      if (err.response && err.response.data) {
        const validationErrors = err.response.data;
        setError(validationErrors.completed)
      } else {
        setError("Unexpected error during the process")
      }
    }
  };

  const editTodo = async (editedTodoName) => {
    try {
      await axios.patch(`${API_URL}${editingTodo.id}/`, { todo_name: editedTodoName });
      setTodos(sortTodos(todos.map(todo =>
        todo.id === editingTodo.id ? { ...todo, todo_name: editedTodoName } : todo
      )))
      setError(null);
    } catch (err) {
      if (err.response && err.response.data) {
        const validationErrors = err.response.data;
        setError(validationErrors.todo_name)
      } else {
        setError("Unexpected error during the process")
      }
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      setTodos(sortTodos(todos.filter(todo => todo.id !== id)));
      setError(null);
    } catch (err) {
      if (err.response && err.response.data) {
        const validationErrors = err.response.data;
        setError(validationErrors.todo_name)
      } else {
        setError("Unexpected error during the process")
      }
    }

  };

  const onEditModal = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setEditingTodo(null);
  }

  const handleSaveModal = async (editedTodoName) => {
    await editTodo(editedTodoName);
    closeEditModal()
  }

  return (
    <div className='flex items-center justify-center h-screen bg-ctp-mantle'>
      <div className="container mx-auto p-4 max-w-lg border border-ctp-pink rounded-xl bg-gradient-to-b from-ctp-mantle to-ctp-crust outline-ctp-pink">
        <h1 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-ctp-pink to-ctp-mauve inline-block text-transparent bg-clip-text">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        {error && <ErrorMessage message={error} />}
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEditModal={onEditModal} />
        <EditTodoModal isOpen={isModalOpen} onClose={closeEditModal} onSave={handleSaveModal} todo={editingTodo} />
      </div>
    </div>

  );
}

export default App;