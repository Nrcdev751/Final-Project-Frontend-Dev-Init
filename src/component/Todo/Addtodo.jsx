import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ text: todo });
    setTodo('');
  };

  return (
    <>

        <button className="w-[120px] btn btn-sm bg-white hover:bg-white my-2" onClick={()=>document.getElementById('my_modal_2').showModal()}>Add Tasks</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg my-2">Add tasks</h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Type here" 
                        className="input input-bordered w-full " />
                        <div className="group-button flex justify-end my-2 ">
                            <button method="dialog" type="submit" className="modal-backdrop btn btn-sm bg-white hover:bg-white outline outline-1 outline-slate-200 text-red-400 me-2">Cancel</button>
                            <button className="btn btn-sm bg-red-400/75 hover:bg-red-400 text-white ">Confirm</button>
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
