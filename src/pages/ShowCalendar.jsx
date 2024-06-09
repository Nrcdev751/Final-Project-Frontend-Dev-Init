import React, { useState, useEffect } from 'react';
import Sidemenu from "../component/Sidemenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'react-calendar/dist/Calendar.css';

function ShowCalendar() {
    const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');

    useEffect(() => {
        const savedEvents = localStorage.getItem("events");
        if (savedEvents) {
            try {
                setEvents(JSON.parse(savedEvents));
            } catch (error) {
                console.error("Failed to parse events from localStorage:", error);
                localStorage.removeItem("events"); 
            }
        }
    }, []);

    const handleEventNameChange = (e) => {
        setEventName(e.target.value);
    };

    const handleEventDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const newEvent = () => {
        if (eventName && eventDate) {

            const updatedEvents = [...events, { title: eventName, date: eventDate }];
            setEvents(updatedEvents);
            localStorage.setItem("events", JSON.stringify(updatedEvents));
            setEventName('');
            setEventDate('');
        }
    };
    const closeModal = () => {
        document.getElementById('my_modal_2').close();
    };

    return (
        <>
            <section className="content">
                <div className="drawer lg:drawer-open ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-red-400/75">
                        <div className="main-menu">
                            <div className="max-w-screen p-10">
                                <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                                    <GiHamburgerMenu className="text-white text-lg" />
                                </label>
                                <div className="mb-4">
                                    
                                   
                                    <button 
                                         onClick={() => document.getElementById('my_modal_2').showModal()}
                                        className="btn btn-sm bg-white hover:bg-white">
                                        <MdEvent /> Add event
                                    </button>
                                    <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                    <h3 className="font-bold text-lg my-2">Add Event</h3>
                                    <form onSubmit="">
                                        <div>
                                        <input 
                                            type="text" 
                                            value={eventName} 
                                            onChange={handleEventNameChange} 
                                            placeholder="Event Name" 
                                            className="input w-full input-bordered mr-2" 
                                        />
                                        <p className="font-bold my-3">Event date</p>
                                         <input 
                                        type="date" 
                                        value={eventDate} 
                                        onChange={handleEventDateChange} 
                                        className="input w-full input-bordered mr-2 " 
                                    />
                                        </div>
                                        <div className="group-button flex justify-end my-2">
                                        <button type="button" onClick={closeModal} className="btn btn-sm bg-white hover:bg-white outline outline-1 outline-slate-200 text-red-400 me-2">
                                            Cancel
                                        </button>
                                        <button type="submit" onClick={newEvent} className="btn btn-sm bg-red-400/75 hover:bg-red-400 text-white">
                                            Confirm
                                        </button>
                                        </div>
                                    </form>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                    </form>
                                </dialog>
                                </div>
                                <div className="bg-white w-100 mt-5 shadow rounded-lg p-10">
                                    <FullCalendar
                                        height={640}
                                        plugins={[dayGridPlugin, interactionPlugin]}
                                        initialView="dayGridMonth"
                                        events={events}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Sidemenu />
                </div>
            </section>
        </>
    );
}

export default ShowCalendar;
