import { GiHamburgerMenu } from "react-icons/gi";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Sidemenu from "./component/Sidemenu";
import { MdEvent } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
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
                    <div className="flex justify-center flex-col md:flex-row md:gap-5 xl:gap-20">
                    <img src={logo} className="md:hidden filter brightness-0 invert  scale-75" alt="Website Logo" />
                      <div className="group-calendar md:w-[50%] ">
                        <a className="btn btn-sm bg-white hover:bg-white "><MdEvent /> Add event</a>
                        <div className="bg-white w-100 mt-5 shadow  rounded-lg p-10">
                          <Calendar/>
                        </div>
                        <div className="flex flex-col md:flex-row  gap-5">
                            <div className="bg-white w-full p-5 my-5">
                              
                            </div>
                            <div className="bg-white w-full p-5 my-5">
                              <p>test</p>
                            </div>
                        </div>
                      </div>
                      <div className="group-todo w-full xl:w-[25%] ">
                        <a className="btn btn-sm bg-white hover:bg-white "><FaTasks /> Add tasks</a>
                        <div className="bg-white h-[385px] group overflow-auto   shadow mt-5 rounded-lg p-10">
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
          </div> 
          <Sidemenu/>
      </div>
    </section>
    </>
  )
}

export default App
