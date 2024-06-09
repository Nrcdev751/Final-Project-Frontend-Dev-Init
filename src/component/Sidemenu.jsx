import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import { FaHome } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";


function Sidemenu(){
    return(
        <div className="drawer-side shadow-md z-50">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                <img src={logo} alt="Website Logo" />
          
                    <nav>
                        <NavLink className="ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group   bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md" to="/">
                            <FaHome className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                            <p className="font-semibold ms-2">Overview</p>
                        </NavLink>
                        <NavLink className="nav-link ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md" to="/calendar">
                            <FaCalendarDays className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                            <p className="font-semibold ms-2">Calendar</p>
                        </NavLink>
                        <NavLink to="/todo" className="nav-link ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md">
                                <FaCalendarCheck className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                                <p className="font-semibold ms-2">To-do</p>
                        </NavLink>
                        <NavLink to="/note" className="nav-link ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md">
                                <RiTodoFill className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                                <p className="font-semibold ms-2">Note</p>
                        </NavLink>
                    </nav>
     
            </ul>
          </div>
    )
}
export default Sidemenu