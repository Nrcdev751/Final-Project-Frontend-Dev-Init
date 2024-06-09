import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TodoContext } from './TodoContext';

const mockTodos = [
  { id: 1, title: 'Todo 1', isChecked: false },
  { id: 2, title: 'Todo 2', isChecked: true },
];

const mockNotes = [
  { date: '2023-06-01', title: 'Note 1', detail: 'Detail of note 1' },
];

beforeAll(() => {
  localStorage.setItem('Notes', JSON.stringify(mockNotes));
});

test('renders calendar, note, and todo list', () => {
  render(
    <TodoContext.Provider value={{ todos: mockTodos }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoContext.Provider>
  );

  // Check if the calendar is rendered
  expect(screen.getByText('Add event')).toBeInTheDocument();
  
  // Check if the first note is rendered
  expect(screen.getByText('Note 1')).toBeInTheDocument();
  
  // Check if the uncompleted tasks count is rendered
  expect(screen.getByText('1 tasks')).toBeInTheDocument();
  
  // Check if todos are rendered
  expect(screen.getByText('Todo 1')).toBeInTheDocument();
});
