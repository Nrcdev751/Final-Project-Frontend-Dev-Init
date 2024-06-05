import Sidemenu from "../component/Sidemenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function ShowCalendar(){
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
                                <a className="btn btn-sm bg-white hover:bg-white "><MdEvent /> Add event</a>
                                <div className="bg-white w-100 mt-5 shadow  rounded-lg p-10">
                                    <Calendar/>
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
export default ShowCalendar