import React, { useContext, useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import Sidemenu from "./component/Sidemenu";
import Unchecktodo from './component/Todo/Unchecktodo.jsx';
import logo from './assets/logo.svg';
import { TodoContext } from './TodoContext.jsx';

function App() {
  const { todos } = useContext(TodoContext);
  const uncompletedTasks = todos.filter(todo => !todo.isChecked).length;
  const [events, setEvents] = useState([]);
  const [firstNote, setFirstNote] = useState(null);

  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      try {
        setEvents(JSON.parse(savedEvents));
      } catch (error) {
        console.error("Failed to parse events from localStorage:", error);
        localStorage.removeItem("events"); // Clear invalid data
      }
    }

    const savedNotes = localStorage.getItem("Notes");
    if (savedNotes) {
      try {
        const notes = JSON.parse(savedNotes);
        if (notes.length > 0) {
          setFirstNote(notes[0]);
        }
      } catch (error) {
        console.error("Failed to parse notes from localStorage:", error);
        localStorage.removeItem("Notes"); // Clear invalid data
      }
    }
  }, []);

  const deleteNote = () => {
    const savedNotes = localStorage.getItem("Notes");
    if (savedNotes) {
      try {
        const notes = JSON.parse(savedNotes);
        const updatedNotes = notes.slice(1); // Remove the first note
        localStorage.setItem("Notes", JSON.stringify(updatedNotes));
        setFirstNote(updatedNotes.length > 0 ? updatedNotes[0] : null);
      } catch (error) {
        console.error("Failed to delete note from localStorage:", error);
      }
    }
  };

  return (
    <div className="content">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-red-400/75">
          <div className="main-menu">
            <div className="max-w-screen p-10">
              <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                <GiHamburgerMenu className="text-white text-lg" />
              </label>
              
              <div className="flex justify-center flex-col md:flex-row md:gap-5 xl:gap-20">
                <img src={logo} className="md:hidden filter brightness-0 invert scale-75" alt="Website Logo" />
                <div className="group-calendar md:w-[50%]">
                  <Link to="/calendar" className="btn btn-sm bg-white hover:bg-white">
                    <MdEvent /> Add event
                  </Link>
                  <div className="bg-white w-100 mt-5 shadow rounded-lg p-10">
                    <FullCalendar
                      height={640}
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                      events={events}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="bg-white rounded-md w-full flex p-5 my-5">
                      <div className="flex items-center">
                        <MdDone className="w-8 h-8 text-red-500/50" />
                      </div>
                      <div className="show-info ms-5">
                        <p className="font-bold">Complete</p>
                        <p>5</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-md w-full flex p-5 my-5">
                      <div className="flex items-center">
                        <MdOutlinePending className="w-8 h-8 text-red-500/50" />
                      </div>
                      <div className="show-info ms-5">
                        <p className="font-bold">InComplete</p>
                        <p>5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-todo w-full xl:w-[25%]">
                  <Link to="/todo" className="btn btn-sm bg-white hover:bg-white">
                    <FaTasks /> Add tasks
                  </Link>
                  <div className="bg-white h-[385px] group overflow-auto shadow mt-5 rounded-lg p-10">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold">Daily Tasks</p>
                      <p className="text-sm font-bold text-red-400/75">{uncompletedTasks} tasks</p>
                    </div>
                    {todos.map(todo => (
                      <Unchecktodo key={todo.id} todo={todo} isChecked={todo.isChecked} />
                    ))}
                  </div>
                  <Link to="/note" className="btn btn-sm bg-white hover:bg-white my-5">
                    <RiTodoFill /> Add notes
                  </Link>
                  {firstNote && (
                    <Link to="/note">
                      <div className="bg-white  shadow rounded-lg p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-slate-700/75">{firstNote.date}</p>
                        </div>
                        <p className="text-xl font-bold mb-3 mt-2">{firstNote.title}</p>
                        <p>{firstNote.detail}</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidemenu />
      </div>
    </div>
  );
}

export default App;
