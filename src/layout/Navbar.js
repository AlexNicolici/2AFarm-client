import React from "react";
import ro from "../assets/ro.png";

const logo2A = "https://2afarm.ro/wp-content/uploads/2018/10/logo.svg";

function Navbar() {
  return (
    <nav className="  border-b border-farm-color">
      <div className="max-w-5xl mx-auto px-2 py-4  flex flex-row flex-wrap justify-between ">
        <img src={logo2A} alt="logo" width={110} className="cursor-pointer" />

        <ul className="w-72 text-lg  flex flex-row  justify-around items-center">
          <li className="cursor-pointer hover:text-farm-color ease-out duration-200">
            Acasă
          </li>
          <li className="cursor-pointer hover:text-farm-color ease-out duration-200">
            Despre noi
          </li>
          <li className="cursor-pointer hover:text-farm-color ease-out duration-200">
            Contact
          </li>
        </ul>

        <div className="flex flex-row justify-center items-center">
          <button className="bg-gradient-to-br from-lime-200 via-green-400 to-farm-color  text-white font-semibold  px-4 py-2 rounded-md">
            Comenzi
          </button>

          <img
            src={ro}
            alt="ro-flag"
            width={50}
            className="border border-farm-color cursor-pointer ml-2 p-2 rounded-md"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
