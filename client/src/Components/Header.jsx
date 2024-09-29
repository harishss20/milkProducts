import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="bg-slate-50 rounded-md shadow-xl fixed top-0 left-0 w-full z-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a href="#">
              <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            </a>
            <div className="flex justify-center overflow-hidden">
              <h1 className="px-4 font-bold text-2xl text-gray-800 animate-reveal-left-to-right inline-block whitespace-nowrap">
                Milk Agency
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="rounded-md bg-thick-blue px-4 py-2 text-sm text-white shadow-md hover:bg-white hover:text-thick-blue transition font-bold"
              onClick={() => {}}
            >
              Request
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
