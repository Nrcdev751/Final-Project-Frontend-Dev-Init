import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const editTodo = (updatedTodo) => {
    const newTodos = todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    Swal.fire({
      title: "Delete task?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA9595",
      cancelButtonColor: "#fff",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success"
        });
      }
    });
   

  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};