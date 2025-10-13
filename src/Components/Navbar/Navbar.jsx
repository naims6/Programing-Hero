import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import MobileNavbar from "./MobileNavbar";
import Menu from "/assets/bg_image/menu.svg";
import MenuClose from "/assets/bg_image/menu-close.svg";

const Navbar = () => {
  const menuBtnRef = useRef();
  const menuContainerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleMenuOutsideClick = (e) => {
      if (
        isMenuOpen &&
        !menuBtnRef.current.contains(e.target) &&
        !menuContainerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMenuOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleMenuOutsideClick);
    };
  }, [isMenuOpen]);

  const lists = (
    <>
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
    </>
  );
  return (
    <>
      <div className="overflow-hidden">
        <div className="fixed top-0 left-0 w-full z-999 shadow">
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
                <ul className="hidden lg:flex gap-12">{lists}</ul>
                <button
                  onClick={handleMenuClick}
                  className="lg:hidden cursor-pointer"
                >
                  <img
                    ref={menuBtnRef}
                    src={`${isMenuOpen ? MenuClose : Menu}`}
                    alt="menubtn"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <MobileNavbar
          isMenuOpen={isMenuOpen}
          menuContainerRef={menuContainerRef}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </>
  );
};

export default Navbar;
