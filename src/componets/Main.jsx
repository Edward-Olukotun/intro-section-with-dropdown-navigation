import React from "react";
import Maker from "../images/client-maker.svg";
import Databiz from "../images/client-databiz.svg";
import Meet from "../images/client-meet.svg";
import Audiophile from "../images/client-audiophile.svg";
import Desk from "../images/image-hero-desktop.png";
import Mobile from "../images/image-hero-mobile.png";

function Main() {
  return (
    <>
      <div className="bg-white h-screen w-screen flex flex-col  md:flex-row-reverse md:overflow-hidden">
        <div className="md:w-[50%] h-screen ">
          <div className="hidden md:flex md:h-[100%] md:w-[100%]">
            <img
              src={Desk}
              alt="/"
              className="object-cover h-[100%] w-[100%]"
            />
          </div>
          <div className="md:hidden">
            <img
              src={Mobile}
              alt="/"
              className="object-cover h-[100%] w-[100%]"
            />
          </div>
        </div>
        <div className=" h-screen md:w-[50%] flex flex-col">
          <h1 className="text-3xl font-black my-4 text-center md:hidden">
            Make remote work
          </h1>
          <div className="md:ml-10">
            <div className="hidden md:flex flex-col md:w-[100%] md:mb-8 md:mt-[40%] lg:mt-[20%] xl:mt-[20%]">
              <span className="text-5xl lg:text-7xl font-extrabold">Make</span>
              <h1 className="text-5xl lg:text-7xl font-extrabold ">
                remote work
              </h1>
            </div>
            <div className="md:flex md:justify-start">
              <p className="w-80 font-bold text-md text-gray-400 text-center mx-5 md:mx-0 md:text-start">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="bg-gray-900  text-white hover:shadow-2xl hover:text-gray-300 w-28 h-10 rounded-xl border my-5 font-extrabold border-gray-900 hover:cursor-pointer">
                Learn more
              </button>
            </div>
            <div className="flex my-10 justify-start md:mt-[90%] lg:mt-[30%] xl:mt-[50%]">
              <img
                src={Databiz}
                alt="/"
                className="w-14 mx-3 h-5  md:h-8 md:mx-5"
              />
              <img
                src={Audiophile}
                alt="/"
                className="w-14 mx-3  h-5 md:mx-5"
              />
              <img
                src={Meet}
                alt="/"
                className="w-14 mx-3 h-5 md:h-8 md:mx-5"
              />
              <img
                src={Maker}
                alt="/"
                className="w-14 mx-3 h-5 md:h-8 md:mx-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
