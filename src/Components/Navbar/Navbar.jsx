import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-gray-900">
      <div className="flex items-center min-h-[4rem] container2">
        <div className="navbar-start">
          <img
            src="/public/assets/business/ph-logo.svg"
            alt="programing hero logo"
          />
          <a className="text-xl">Programing Hero</a>
        </div>

        <div className="navbar-end">
          <ul className="flex gap-12">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
