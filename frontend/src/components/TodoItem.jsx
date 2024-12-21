import { TrashIcon, PencilSquareIcon } from '@heroicons/react/16/solid';

const TodoItem = ({ todo, onToggle, onDelete, onEditModal }) => {

  return (
    <li className="group relative flex items-center mb-2 p-2 bg-gradient-to-r
     from-ctp-pink to-ctp-mauve hover:bg-ctp-mauve active:bg-ctp-mauve/75 rounded-md">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, !todo.completed)}
        className="accent-ctp-lavender mr-2 cursor-pointer"
      />
      <span className={`flex-grow gradient from-ctp-pink to-ctp-mauve 
        ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.todo_name}
      </span>
      <div className='opacity-0 group-hover:opacity-100 transition-opacity
       duration-300 flex items-center justify-center space-x-1'>
        <button
          onClick={() => onEditModal(todo)}
        >
          <PencilSquareIcon className='text-blue-500 hover:text-blue-700 transition-colors h-5 w-5' />

        </button>
        <button
          onClick={() => onDelete(todo.id)}
        >
          <TrashIcon className='text-rose-500 hover:text-rose-700 transition-colors h-5 w-5' />
        </button>
      </div>

    </li>
  );
};

export default TodoItem;