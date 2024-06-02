import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { FaHome } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";



function Sidemenu(){
    return(
        <div className="drawer-side shadow-md">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                <img src={logo} alt="Website Logo" />
                <Link to="/">
                    <div className="ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md">
                    <FaHome className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                    <p className="font-semibold ms-2">Overview</p>
                    </div>
                </Link>
                <Link to="/calendar">
                    <div className="ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md">
                    <FaCalendarDays className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                    <p className="font-semibold ms-2">Calendar</p>
                    </div>
                </Link>
                <Link to="/todo">
                    <div className="ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md">
                    <RiTodoFill className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                    <p className="font-semibold ms-2">To-do</p>
                    </div>
                </Link>
            </ul>
          </div>
    )
}
export default Sidemenu