import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName.trim()) {
      addTodo(todoName);
      setTodoName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex relative">
      <input
        type="text"
        placeholder="Add task..."
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        className="w-full border p-2 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-ctp-pink"
      />
      <button type="submit" className="h-full absolute right-0 py-2 px-4 
      rounded-xl bg-ctp-lavender 
      hover:bg-ctp-mauve active:bg-ctp-mauve/75
      transition-colors">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
