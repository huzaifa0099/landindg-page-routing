import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main  flex justify-between sticky  mt-10 text-white  items-center ">
      <div className="logo text-3xl  font-serif ml-16 ">EV-olution</div>
      <ul className="flex gap-10 mr-10">
        <NavLink
          className={({ isActive }) => `border-black rounded-full px-5
        hover:bg-slate-400/40  p-1 duration-200  ${isActive ? "bg-slate-400/40 " : ""}`}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink className={({ isActive }) => `border-black rounded-full px-5
        hover:bg-slate-400/40  p-1  ${isActive ? "bg-slate-400/40 " : ""}`} to="/explore">
          <li>Explore</li>
        </NavLink>
        <NavLink className={({ isActive }) => `border-black rounded-full px-5
        hover:bg-slate-400/40  p-1  ${isActive ? "bg-slate-400/40 " : ""}`} to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className={({ isActive }) => `border-black rounded-full px-5
        hover:bg-slate-400/40  p-1  ${isActive ? "bg-slate-400/40 " : ""}`} to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
