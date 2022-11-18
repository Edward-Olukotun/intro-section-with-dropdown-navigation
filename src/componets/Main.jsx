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
        <div className="md:w-[50%] h-screen">
          <div className="hidden md:flex">
            <img src={Desk} alt="/" className="object-cover h-fit" />
          </div>
          <div className="md:hidden">
            <img src={Mobile} alt="/" className="object-cover" />
          </div>
        </div>
        <div className="md:w-[50%] h-screen items-center md:mt-80 md:items-start md:ml-24 flex flex-col my-3 bg-white">
          <h1 className="text-3xl font-black my-4 md:hidden">
            Make remote work
          </h1>
          <div className="hidden md:flex flex-col md:mb-8">
            <span className="text-7xl font-extrabold">Make</span>
            <h1 className="text-7xl font-extrabold">remote work</h1>
          </div>
          <p className="w-80 font-bold text-md text-gray-400">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-gray-900 text-white hover:shadow-2xl hover:text-gray-300 w-28 h-10 rounded-xl border my-5 font-extrabold border-gray-900 hover:cursor-pointer">
            Learn more
          </button>
          <div className="flex my-5 justify-center md:mt-32">
            <img
              src={Databiz}
              alt="/"
              className="w-14 mx-3 h-5  md:h-8 md:mx-5"
            />
            <img
              src={Audiophile}
              alt="/"
              className="w-14 mx-3 mt-2 h-5 md:mx-5"
            />
            <img src={Meet} alt="/" className="w-14 mx-3 h-5 md:h-8 md:mx-5" />
            <img src={Maker} alt="/" className="w-14 mx-3 h-5 md:h-8 md:mx-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
