import Sidemenu from "../component/Sidemenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import Calendar from 'react-calendar'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import logo from '../assets/logo.svg'

function ShowTodo(){
    return(
        <>
            <section className="content">
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-red-400/75">
                    <div className="main-menu">
                        <div className="max-w-screen p-10">
                                <label htmlFor="my-drawer-2" className="drawer-button me-5  lg:hidden">
                                <GiHamburgerMenu  className="text-white text-lg"/>
                                </label>
                                <div className="grid grid-cols-12 justify-center mt-5 rounded-lg p-10">
                                    <div className="col-span-4 hidden lg:block"></div>
                                    <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
                                        <img src={logo} className=" filter brightness-0 invert  scale-75" alt="" />
                                        <label className="input input-bordered flex items-center gap-2">
                                             <input type="text" className="grow" placeholder="ค้นหาที่นี่" />
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                        </label>
                                        <div className="bg-white rounded-md p-5 my-2">
                                            <div className="tasks-info flex items-center justify-between">
                                                <div className="tasks-name flex items-center">
                                                        <label>
                                                            <input type="checkbox" />
                                                            <span class="todo-checkbox"></span>
                                                        </label>
                                                    <p className="text-lg font-semibold ms-2">กินข้าว</p>
                                                </div>
                                                <div className="tasks-item ">
                                                    <button className="btn btn-sm bg-white hover:bg-white outline outline-1 outline-slate-200 text-red-400 mx-2"><FaEdit /></button>
                                                    <button className="btn btn-sm bg-red-400/75 hover:bg-red-400 text-white"><FaTrashAlt /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4 hidden lg:block"></div>
                                    </div>
                                    
                                </div>
                            
                        </div>
                    </div>
                </div> 
                <Sidemenu/>
            </div>
    </section>
        </>
    )
}
export default ShowTodo