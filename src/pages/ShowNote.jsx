import React, { useState, useEffect } from 'react';
import Sidemenu from "../component/Sidemenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTodoFill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import Swal from 'sweetalert2';

function ShowNote() {
    const [notes, setNotes] = useState([]);
    const [noteName, setNoteName] = useState('');
    const [noteDetail, setNoteDetail] = useState('');

    useEffect(() => {
        const savedNotes = localStorage.getItem("Notes");
        if (savedNotes) {
            try {
                setNotes(JSON.parse(savedNotes));
            } catch (error) {
                console.error("Failed to parse Notes from localStorage:", error);
                localStorage.removeItem("Notes"); 
            }
        }
    }, []);

    const handleNoteNameChange = (e) => {
        setNoteName(e.target.value);
    };

    const handleNoteDetailChange = (e) => {
        setNoteDetail(e.target.value);
    };

    const formatDate = (date) => {
        return date.toDateString() + " " + date.toTimeString().split(" ")[0];
    };

    const newNote = () => {
        if (noteName && noteDetail) {
            const noteDate = new Date();
            const formattedDate = formatDate(noteDate);
            const updatedNotes = [...notes, { title: noteName, detail: noteDetail, date: formattedDate }];
            setNotes(updatedNotes);
            localStorage.setItem("Notes", JSON.stringify(updatedNotes));
            setNoteName('');
            setNoteDetail('');
            closeModal();
        }
    };

    const deleteNote = (index) => {
        Swal.fire({
            title: "Delete note?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FA9595",
            cancelButtonColor: "#fff",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const updatedNotes = notes.filter((_, i) => i !== index);
                setNotes(updatedNotes);
                localStorage.setItem("Notes", JSON.stringify(updatedNotes));
              Swal.fire({
                title: "Deleted!",
                text: "Your note has been deleted.",
                icon: "success"
              });
            }
          });
       
    };

    const closeModal = () => {
        document.getElementById('my_modal_2').close();
    };

    return (
        <>
            <section className="content">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-red-400/75 h-screen">
                        <div className="main-menu">
                            <div className="max-w-screen p-10">
                                <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                                    <GiHamburgerMenu className="text-white text-lg" />
                                </label>
                                <div className="mb-4">
                                    <button 
                                         onClick={() => document.getElementById('my_modal_2').showModal()}
                                        className="btn btn-sm bg-white hover:bg-white">
                                        <RiTodoFill /> Add note
                                    </button>
                                    <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                    <h3 className="font-bold text-lg my-2">Add Note</h3>
                                    <form onSubmit={(e) => { e.preventDefault(); newNote(); }}>
                                        <div>
                                        <input 
                                            type="text" 
                                            value={noteName} 
                                            onChange={handleNoteNameChange} 
                                            placeholder="Note Name" 
                                            className="input w-full input-bordered mr-2" 
                                            required
                                        />
                                        <p className="font-bold my-3">Note detail</p>
                                         <textarea 
                                        rows={10}
                                        type="text" 
                                        value={noteDetail} 
                                        onChange={handleNoteDetailChange} 
                                        required
                                        className="input w-full input-bordered mr-2" 
                                        />
                                        </div>
                                        <div className="group-button flex justify-end my-2">
                                        <button type="button" onClick={closeModal} className="btn btn-sm bg-white hover:bg-white outline outline-1 outline-slate-200 text-red-400 me-2">
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
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-5">
                                    {notes.map((note, index) => (
                                        <div key={index} className="bg-white mt-5 shadow rounded-lg p-5">
                                            <div className="flex items-center justify-between">
                                                <p className="text-slate-700/75">{note.date}</p>
                                                <button 
                                                    onClick={() => deleteNote(index)}
                                                    className="text-slate-700/75"
                                                >
                                                    <MdOutlineCancel className="text-red-700/50 duration-300 hover:text-red-700/75" />
                                                </button>
                                            </div>
                                            <p className="text-xl font-bold mb-3 mt-2">{note.title}</p>
                                            <p >{note.detail}</p> 
                                           
                                        </div>
                                    ))}
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

export default ShowNote;
