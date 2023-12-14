import React from "react";
import profilImage from "../assets/profil.jpg";

function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
        <div className="flex px-10  md:pb-0 pb-3 ">
          <div className="mx-auto md:mx-0 md:me-auto">
            <div className="flex">
              <img src={profilImage} alt="react" className="m-auto" />
            </div>
            <figcaption className="text-sm italic text-gray-500">profil.jpg</figcaption>
          </div>
        </div>
        <div className="flex lg:col-span-2 md:pt-0 pt-3 px-10 items-center">
          <p className="md:text-md text-xl md:text-left text-center mx-auto">
            Hello, my name is <span className="bg-yellow-300 px-2 mx-1">Hafid Firman Febrian</span>, I am a <span className="bg-yellow-300 px-2 mx-1">Front-End Web Developer</span> who likes to learn new things and is interested in the
            world of technology.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
