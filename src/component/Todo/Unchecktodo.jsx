import React from 'react';
import { FaCheck } from "react-icons/fa";

const Unchecktodo = ({ todo, isChecked }) => {
  return (
    <>
      <div key={todo.id} className="task-group p-2 flex justify-between my-4 items-center rounded-full bg-red-300/25 w-full">
        <div className="flex items-center">
          <label>
            <input type="checkbox" checked={isChecked} onChange={() => {}} /> {/* Controlled checkbox */}
            <p>{todo.text}</p>
          </label>
        </div>
        {isChecked ?        
          <div className="check flex  ps-2 items-center w-8 h-8 bg-red-300 rounded-full">
            <FaCheck className="text-white" />
          </div>  : 
          <div className="check flex  ps-2 items-center w-8 h-8 bg-red-300 rounded-full">
          </div>
        }
      </div>
    </>
  );
};

export default Unchecktodo;
