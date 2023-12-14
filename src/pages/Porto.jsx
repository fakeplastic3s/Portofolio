import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

function Porto() {
  return (
    <>
      <main className="md:container md:mx-auto md:w-4/5 lg:w-full p-3 text-nord-polar-1 xl:text-xl">
        <header className="">
          {/* Navbar */}
          <Navbar />
          <div className="block h-px bg-gray-900 mt-2 mb-5"></div>
        </header>

        <section>
          <div className="container mx-auto px-5 py-10 flex ">
            {/* Content */}
            <Outlet />
          </div>
        </section>
        <footer>
          <div className="block h-px bg-gray-900 mt-2"></div>
          <div className="flex justify-between flex-col lg:flex-row items-center mx-auto my-2">
            <p>
              Created with <span className="hover:bg-red-500 px-2 hover:text-white">:love</span> by hafid firman
            </p>
            <div className="flex justify-between ">
              <p className="mx-1"> /</p>
              <a href="https://github.com/fakeplastic3s" target="_blank" rel="noreferrer" className="hover:bg-yellow-300 px-2">
                github
              </a>
              <p className="mx-1"> /</p>
              <a href="https://www.instagram.com/nervasw/" target="_blank" rel="noreferrer" className="hover:bg-yellow-300 px-2">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Porto;
