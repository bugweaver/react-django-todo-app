import React, { useState, useEffect, useRef } from 'react';

const EditTodoModal = ({ isOpen, onClose, onSave, todo }) => {
    const [editedTodoName, setEditedTodoName] = useState('');
    const modalRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (todo) {
            setEditedTodoName(todo.todo_name);
        }
    }, [todo]);

    useEffect(() => {
        if (modalRef.current) {
            if (isOpen) {
              setAnimate(true)
            } else {
               setAnimate(false)
            }
        }
    }, [isOpen]);



    const handleTextChange = (e) => {
        setEditedTodoName(e.target.value);
    };

    const handleSave = () => {
        onSave(editedTodoName);
        setAnimate(false);
        setTimeout(onClose, 200);
    };

    const handleCancel = () => {
       setAnimate(false);
       setTimeout(onClose, 200);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSave()
        }
    }


    if (!isOpen && !animate) {
        return null;
    }


    return (
        <div
            ref={modalRef}
            className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50
                       transition-all duration-200 ease-out ${animate ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
            <div className="bg-ctp-mantle p-5 rounded-xl shadow-xl border border-ctp-pink outline-ctp-pink">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-ctp-pink to-ctp-mauve inline-block text-transparent bg-clip-text">Edit task</h2>
                <input
                  type="text"
                  value={editedTodoName}
                  onChange={handleTextChange}
                   onKeyDown={handleKeyDown}
                  className="border rounded-xl w-full p-2 mb-4 outline-none text-text"
                />
                <div className="flex justify-end space-x-2">
                    <button onClick={handleCancel} className="px-4 py-2 rounded-xl bg-ctp-flamingo hover:bg-ctp-pink active:bg-ctp-pibk/75 transition-colors">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-xl bg-ctp-lavender hover:bg-ctp-mauve active:bg-ctp-mauve/75 transition-colors">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTodoModal;