import React from "react";
import { Link, Navigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Navbar() {
  return (
    <>
      <nav className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-1">
        <p className=" lg:text-4xl text-2xl md:text-left text-center text-nord-polar-0">
          ~$
          <span className="bg-yellow-300  mx-1 lg:text-4xl text-2xl">
            {" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                // wait 1s before replacing "Mice" with "Hamsters"
                "fakeplastic3s",
                1000,
                "Hafid Firman Febrian",
                1000,
                "Portofolio",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={0}
            />
          </span>
        </p>
        <div className="flex">
          <p className="md:ml-auto md:mr-0 m-auto">
            <Link to={"/"} className="active:bg-yellow-300 hover:bg-yellow-300 px-2 mx-1">
              #
            </Link>
            <span>/</span>

            <Link to={"/Project"} className="active:bg-yellow-300 hover:bg-yellow-300 px-2 mx-1">
              Project
            </Link>
            <span>/</span>

            <Link to={"/Skill"} className="active:bg-yellow-300 hover:bg-yellow-300 px-2 mx-1">
              Skill
            </Link>
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
