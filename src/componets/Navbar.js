import React, { useState } from "react";
import { AiOutlineClose, AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Todo from "../images/icon-todo.svg";
import Calender from "../images/icon-calendar.svg";
import Planning from "../images/icon-planning.svg";
import Reminder from "../images/icon-reminders.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);
  const handleFeatures = () => {
    setFeatures(!features);
  };
  const handleCompany = () => {
    setCompany(!company);
  };
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex  w-screen justify-start items-center h-20 px-4 absolute z-10 text-black bg-white">
      <div>
        <h1 className="text-3xl font-extrabold">SNAP</h1>
      </div>
      <ul className="hidden md:flex  md:ml-10">
        <li className="mx-4 hover:cursor-pointer flex hover:text-gray-300">
          Features
          <div onClick={handleFeatures}>
            {features ? (
              <AiOutlineUp className="text-black mx-1 mt-[30%]" size={15} />
            ) : (
              <AiOutlineDown className="text-black mx-1 mt-[30%]" size={15} />
            )}
          </div>
          <ul
            className={
              features
                ? "absolute text-black border-b w-40 bg-white shadow-2xl px-4 mt-10 rounded-xl  flex flex-col content-start -ml-14"
                : "hidden"
            }
          >
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              <div className="flex">
                <img src={Todo} alt="/" className="mx-3" />
                ToDo list
              </div>
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              <div className="flex">
                <img src={Calender} alt="/" className="mx-3" />
                Calender
              </div>
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              <div className="flex">
                <img src={Reminder} alt="/" className="mx-3" />
                Reminder
              </div>
            </li>
            <li className="my-3 hover:cursor-pointr hover:text-gray-300">
              <div className="flex">
                <img src={Planning} alt="/" className="mx-3" />
                Planning
              </div>
            </li>
          </ul>
        </li>
        <li className="mx-4 hover:cursor-pointer flex hover:text-gray-300">
          Company
          <div onClick={handleCompany}>
            {company ? (
              <AiOutlineUp className="text-black mx-1 mt-[30%]" size={15} />
            ) : (
              <AiOutlineDown className="text-black mx-1 mt-[30%]" size={15} />
            )}
          </div>
          <ul
            className={
              company
                ? "absolute text-black border-b w-28 shadow-2xl bg-white px-4 mt-10 rounded-xl  flex flex-col content-start "
                : "hidden"
            }
          >
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              History
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              Our Team
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              Blog
            </li>
          </ul>
        </li>
        <li className="mx-4 hover:cursor-pointer hover:text-gray-300">
          Career
        </li>
        <li className="mx-4 hover:cursor-pointer hover:text-gray-300">About</li>
      </ul>
      <div className="  items-center  md:ml-[40%] hidden md:flex  ">
        <button className=" hover:border border-gray-700 mx-5 w-20 rounded-xl hover:text-gray-300">
          Login
        </button>
        <button className="hover:border border-gray-700 mx-5 w-20 rounded-xl hover:text-gray-300">
          Register
        </button>
      </div>
      {/* hamburger */}
      <div
        onClick={handleNav}
        className="md:hidden z-10 ml-[80%] hover:cursor-pointer"
      >
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-[50%] ml-[50%]  bg-gray-100/90 px-4 py-14  flex flex-col"
            : "absolute left-0 top-[-1000%]"
        }
      >
        <div className="flex flex-col ">
          <div className="flex my-3 hover:cursor-pointer hover:text-gray-300">
            Features
            <div onClick={handleFeatures}>
              {features ? (
                <AiOutlineUp className="text-black mx-3 mt-1" size={15} />
              ) : (
                <AiOutlineDown className="text-black mx-3 mt-1" size={15} />
              )}
            </div>
            <ul
              className={
                features
                  ? "absolute text-black border-b w-40 shadow-2xl bg-white px-4 mt-14 rounded-xl py-5 flex flex-col content-start "
                  : "hidden"
              }
            >
              <li className="my-3 hover:cursor-pointer hover:text-gray-300">
                <div className="flex">
                  <img src={Todo} alt="/" className="mx-3" />
                  ToDo list
                </div>
              </li>
              <li className="my-3 hover:cursor-pointer hover:text-gray-300">
                <div className="flex">
                  <img src={Calender} alt="/" className="mx-3" />
                  Calender
                </div>
              </li>
              <li className="my-3 hover:cursor-pointer hover:text-gray-300">
                <div className="flex">
                  <img src={Reminder} alt="/" className="mx-3" />
                  Reminder
                </div>
              </li>
              <li className="my-3 hover:cursor-pointer hover:text-gray-300">
                <div className="flex">
                  <img src={Planning} alt="/" className="mx-3" />
                  Planning
                </div>
              </li>
            </ul>
          </div>
          <div className="flex my-3 hover:cursor-pointer hover:text-gray-300">
            Company
            <div onClick={handleCompany}>
              {company ? (
                <AiOutlineUp className="text-black mx-2 mt-1" size={15} />
              ) : (
                <AiOutlineDown className="text-black mx-2 mt-1" size={15} />
              )}
            </div>
            <ul
              className={
                company
                  ? "absolute text-black border-b w-28 shadow-2xl bg-white px-4 mt-10 rounded-xl  flex flex-col content-start "
                  : "hidden"
              }
            >
              <li className="my-3 hover:cursor-pointer hover:text-gray-300">
                History
              </li>
              <li className="my-3 hover:cursor-pointer hover:text-gray-300">
                Our Team
              </li>
              <li className="my-3 hover:cursor-pointer hover:text-gray-300">
                Blog
              </li>
            </ul>
          </div>
          <div className="my-3 hover:cursor-pointer hover:text-gray-300">
            Career
          </div>
          <div className="my-3 hover:cursor-pointer hover:text-gray-300">
            About
          </div>
          <div className="flex flex-col items-center ">
            <button className="my-2 hover:cursor-pointer hover:border border-gray-700 w-20 rounded-xl hover:text-gray-300">
              Login
            </button>
            <button className="my-2  hover:cursor-pointer hover:border border-gray-700 w-20 rounded-xl hover:text-gray-300">
              Register
            </button>
          </div>
        </div>
        {/* <ul> */}
        {/* <li className="border-b flex">
            FEATURES
            <div onClick={handleFeatures}>
              {features ? (
                <AiOutlineUp className="text-black mx-2 " size={15} />
              ) : (
                <AiOutlineDown className="text-black mx-2 " size={15} />
              )}
            </div>
            <ul
              className={
                features
                  ? "absolute text-black border-b w-40 bg-white px-4 mt-14 rounded-xl py-5 flex flex-col content-start "
                  : "hidden"
              }
            >
              <li className="my-3 hover:cursor-pointer">ToDo list</li>
              <li className="my-3 hover:cursor-pointer">Calender</li>
              <li className="my-3 hover:cursor-pointer">Reminder</li>
              <li className="my-3 hover:cursor-pointer">Planning</li>
            </ul>
          </li> */}

        {/* <li className="border-b flex">
            COMPANY
            <div onClick={handleCompany}>
              {company ? (
                <AiOutlineUp className="text-black mx-2 " size={15} />
              ) : (
                <AiOutlineDown className="text-black mx-2 " size={15} />
              )}
            </div>
            <ul
              className={
                company
                  ? "absolute text-black border-b w-28 bg-white px-4 mt-10 rounded-xl  flex flex-col content-start "
                  : "hidden"
              }
            >
              <li className="my-3 hover:cursor-pointer">History</li>
              <li className="my-3 hover:cursor-pointer">Our Team</li>
              <li className="my-3 hover:cursor-pointer">Blog</li>
            </ul>
          </li> */}
        {/* <li className="border-b">CAREER</li>
          <li className="border-b">ABOUT</li> */}
        {/* <div className="flex flex-col items-center">
            <button className="my-6 border border-red-800 w-20 rounded-xl">
              LOGIN
            </button>
            <button className="border border-red-800 w-20 rounded-xl">
              REGISTER
            </button>
          </div> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default Navbar;
