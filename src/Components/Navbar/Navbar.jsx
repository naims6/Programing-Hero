import React, { useRef, useState } from "react";
import { Link } from "react-router";
import MobileNavbar from "./MobileNavbar";
import Menu from "/assets/bg_image/menu.svg";
import MenuClose from "/assets/bg_image/menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileDropdownRef = useRef("");

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (mobileDropdownRef.current.classList.contains("left-[150%]")) {
      mobileDropdownRef.current.classList.remove("left-[150%]");
      mobileDropdownRef.current.classList.add("left-[50%]");
    } else {
      mobileDropdownRef.current.classList.add("left-[150%]");
      mobileDropdownRef.current.classList.remove("left-[50%]");
    }
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="fixed top-0 left-0 w-full z-999">
          <div className=" w-full backdrop-blur-[10px]">
            <div className="flex items-center min-h-[4.5rem] container2">
              <div className="navbar-start">
                <img
                  src="/assets/business/ph-logo.svg"
                  alt="programing hero logo"
                />
                <a className="text-xl whitespace-nowrap -ml-2.5">
                  Programing Hero
                </a>
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
                <button
                  onClick={handleMenuClick}
                  className="lg:hidden cursor-pointer"
                >
                  <img src={`${isOpen ? MenuClose : Menu}`} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <MobileNavbar mobileDropdownRef={mobileDropdownRef} />
      </div>
    </>
  );
};

export default Navbar;
