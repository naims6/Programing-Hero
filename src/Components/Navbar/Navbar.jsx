import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-999">
      <div className=" w-full backdrop-blur-[10px]">
        <div className="flex items-center min-h-[4.5rem] container2">
          <div className="navbar-start">
            <img
              src="/assets/business/ph-logo.svg"
              alt="programing hero logo"
            />
            <a className="text-xl whitespace-nowrap -ml-2.5">Programing Hero</a>
          </div>

          <div className="navbar-end">
            <ul className="hidden lg:flex gap-12">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/success">Success</Link>
              </li>
            </ul>
            <button className="lg:hidden">
              <img src="/assets/bg_image/menu.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
