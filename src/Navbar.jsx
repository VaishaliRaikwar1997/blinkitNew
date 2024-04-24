import React from "react";
import logo from "./assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-5 py-5 hidden lg:flex">
      <a href="https://blinkit.com/" className="">
        <img src={logo} className="px-5" />
      </a>
      <div className="">
        <h1 className="font-bold text-2xl ">Delivery in 12minutes</h1>
        <h1 className="flex">
          Sagar Landmark
          <IoMdArrowDropdown className="" />
        </h1>
      </div>
      <div className="flex items-center px-5">
        <IoSearch className="border m-3 text-3xl" />
        <input type="text" placeholder="Search" className="border py-4" />
      </div>
      <button></button>
    </div>
  );
};

export default Navbar;
