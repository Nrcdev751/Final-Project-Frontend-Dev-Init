import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const AddTodo = ({ addTodo, editTodo, editingTodo, setEditingTodo }) => {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTodo(editingTodo.text);
    } else {
      setTodo('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      Swal.fire('Please enter a task.');
      return;
    }
    if (editingTodo) {
      editTodo({
        ...editingTodo,
        text: todo,
      });
      setEditingTodo(null);
    } else {
      addTodo({
        id: Date.now(),
        text: todo,
        completed: false,
      });
    }
    setTodo('');
    document.getElementById('my_modal_2').close();
  };

  return (
    <>
      <button className="w-[120px] btn btn-sm bg-white hover:bg-white my-2" onClick={() => document.getElementById('my_modal_2').showModal()}>
       + Add Task
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg my-2">{editingTodo ? 'Edit Task' : 'Add Task'}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
            <div className="group-button flex justify-end my-2">
              <button type="button" onClick={() => { setEditingTodo(null); document.getElementById('my_modal_2').close(); }} className="btn btn-sm bg-white hover:bg-white outline outline-1 outline-slate-200 text-red-400 me-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-sm bg-red-400/75 hover:bg-red-400 text-white">
                Confirm
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddTodo;
