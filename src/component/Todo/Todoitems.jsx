import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const TodoItem = ({ todo, removeTodo }) => {
  return (
    <>
        <div className="bg-white rounded-md p-5 my-2">
            <div className="tasks-info flex items-center justify-between">
                <div className="tasks-name flex items-center">
                        <label>
                            <input type="checkbox" />
                            <span class="todo-checkbox"></span>
                        </label>
                    <p className="text-lg font-semibold ms-2"> {todo.text}</p>
                </div>
                <div className="tasks-item ">
                    <button className="btn btn-sm bg-white hover:bg-white outline outline-1 outline-slate-200 text-red-400 mx-2"><FaEdit /></button>
                    <button onClick={removeTodo} className="btn btn-sm bg-red-400/75 hover:bg-red-400 text-white"><FaTrashAlt /></button>
                </div>
            </div>
        </div>
    </>
  );
};

export default TodoItem;
