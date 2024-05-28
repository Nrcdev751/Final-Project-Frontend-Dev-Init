import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCalendarDays } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import logo from './assets/logo.svg'

function App() {

  return (
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
                    <div className="flex justify-center flex-col md:flex-row  gap-20">
                    <img src={logo} className="md:hidden filter brightness-0 invert  scale-75" alt="Website Logo" />
                      <div className="bg-white w-100 md:w-[50%] h-[385px] shadow  rounded-lg p-10">
                        <Calendar />
                      </div>
                      <div className="bg-white w-100 md:w-[25%] h-[385px] group overflow-auto  shadow  rounded-lg p-10">
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold">Daily Tasks</p>
                          <p className="text-sm font-bold text-red-400/75">2 tasks</p>
                        </div>
                          <div className="task-group p-2 flex justify-between my-4 items-center rounded-full bg-red-300/25 w-full">
                            <p className="font-bold ms-2">อาบน้ำ</p>
                              <div className="check w-8 h-8 bg-red-300 rounded-full">
                              </div>
                          </div>
                          <div className="task-group p-2 flex justify-between my-4 items-center rounded-full bg-red-300/25 w-full">
                            <p className="font-bold ms-2">อาบน้ำ</p>
                              <div className="check w-8 h-8 bg-red-300 rounded-full">
                              </div>
                          </div>
                          <div className="task-group p-2 flex justify-between my-4 items-center rounded-full bg-red-300/25 w-full">
                            <p className="font-bold ms-2">อาบน้ำ</p>
                              <div className="check w-8 h-8 bg-red-300 rounded-full">
                              </div>
                          </div>
                          <div className="task-group p-2 flex justify-between my-4 items-center rounded-full bg-red-300/25 w-full">
                            <p className="font-bold ms-2">อาบน้ำ</p>
                              <div className="check w-8 h-8 bg-red-300 rounded-full">
                              </div>
                          </div>
                          <div className="task-group p-2 flex justify-between my-4 items-center rounded-full bg-red-300/25 w-full">
                            <p className="font-bold ms-2">อาบน้ำ</p>
                              <div className="check w-8 h-8 bg-red-300 rounded-full">
                              </div>
                          </div>
                          <div className="task-group p-2 flex justify-between my-4 items-center rounded-full bg-red-300/25 w-full">
                            <p className="font-bold ms-2">อาบน้ำ</p>
                              <div className="check w-8 h-8 bg-red-300 rounded-full">
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div> 
          <div className="drawer-side shadow-md">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                <img src={logo} alt="Website Logo" />
                <div className="ms-5 flex my-3 w-[250px] text-lg items-center bg-white rounded-md p-2  shadow-md">
                  <FaHome className="text-red-500/75"/>
                  <li className="font-semibold ms-2">Overview</li>
                </div>
                <div className="ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md">
                  <FaCalendarDays className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                  <li className="font-semibold ms-2 group-hover:text-black duration-300">Calendar</li>
                </div>
                <div className="ms-5 flex my-3 w-[250px] text-lg items-center text-slate-800/75 group  bg-white duration-300 cursor-pointer rounded-md p-2  hover:shadow-md">
                  <RiTodoFill className="text-slate-800/75 group-hover:text-red-500/75 duration-300"/>
                  <li className="font-semibold ms-2 group-hover:text-black duration-300">To-do</li>
                </div>
            </ul>
          </div>
      </div>
    </section>
    </>
  )
}

export default App
