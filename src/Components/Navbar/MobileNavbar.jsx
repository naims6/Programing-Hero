import { Link } from "react-router";

const MobileNavbar = ({ isMenuOpen, menuContainerRef, setIsMenuOpen }) => {
  return (
    <div
      ref={menuContainerRef}
      className={`fixed ${
        isMenuOpen ? "left-1/2" : "left-[150%]"
      }  -translate-x-[50%] top-[4.5rem] bg-gray-900/90 w-[96%] backdrop-blur-sm container2 p-5 pb-7 z-99 rounded-xl transition-all duration-300 overflow-hidden lg:hidden`}
    >
      <ul className="flex flex-col lg:hidden gap-5">
        <li className="border-b border-gray-700 pb-2">
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="w-full block"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="w-full block"
            to="/"
          >
            Products
          </Link>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="w-full block"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="w-full block"
            to="/success"
          >
            Success
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
