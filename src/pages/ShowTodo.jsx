import Sidemenu from "../component/Sidemenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import Calendar from 'react-calendar'
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
                                    <div className="col-span-4"></div>
                                    <div className="col-span-4 flex flex-col justify-center">
                                        <img src={logo} className=" filter brightness-0 invert  scale-75" alt="" />
                                        <div className="bg-white rounded-md p-5">
                                            <div className="tasks-info flex items-center justify-between">
                                                <div className="tasks-name">Test</div>
                                                <div className="tasks-item ">
                                                    <button className="btn btn-sm btn-info text-white mx-2">edit</button>
                                                    <button className="btn btn-sm btn-primary text-white">del</button>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-span-4"></div>
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