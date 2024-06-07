import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const TodoList = ({ todos, removeTodo, setEditingTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <div className="bg-white rounded-md p-5 my-2" key={todo.id}>
          <div className="tasks-info flex items-center justify-between">
            <div className="tasks-name flex items-center">
              <label>
                <input type="checkbox" />
                <span className="todo-checkbox"></span>
              </label>
              <p className="text-lg font-semibold ms-2">{todo.text}</p>
            </div>
            <div className="tasks-item">
              <button
                className="btn btn-sm bg-white hover:bg-white outline outline-1 outline-slate-200 text-red-400 mx-2"
                onClick={() => {
                  setEditingTodo(todo);
                  document.getElementById('my_modal_2').showModal();
                }}
              >
                <FaEdit />
              </button>
              <button className="btn btn-sm bg-red-400/75 hover:bg-red-400 text-white" onClick={() => removeTodo(todo.id)}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
