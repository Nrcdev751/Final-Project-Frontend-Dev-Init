import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCalendarDays } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
function App() {

  return (
    <>
      <section className="content">
      <div className=" drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-red-200/25">
              <div className="main-menu">
                <div className="max-w-screen-xl ">
                  <div className="nav-logo flex items-center text-lg">
                        <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                          <GiHamburgerMenu />
                        </label>
                       
                        <p className="font-bold ms-2 hidden md:block">Hometest</p>
                    </div>
                </div>
              </div>
          </div> 
          <div className="drawer-side shadow-md">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
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
