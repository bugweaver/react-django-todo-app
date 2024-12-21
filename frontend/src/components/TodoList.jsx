import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEditModal }) => {
  return (
    <ul className="mt-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEditModal={onEditModal} />
      ))}
    </ul>
  );
};

export default TodoList;