import React from 'react';
import TodoItem from '../Todo/Todoitems';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
        {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
        ))}
    </ul>
  );
};

export default TodoList;