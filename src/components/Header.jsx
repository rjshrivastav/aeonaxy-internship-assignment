import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const avatar = localStorage.getItem("avatar");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className="flex h-[10vh] justify-between m:justify-normal border-b-2">
        <div className="flex p-4 justify-center items-center gap-10 m:gap-4">
          <div className="logo ml-3 m:ml-2">
          <img width={'50px'} height={'50px'} src="./logo.png" alt="" />
          </div>
          <button
            className="hidden m:block focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              className="w-10 h-10 fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </button>
          <ul className={`flex list-none gap-4 m:flex-col m:absolute m:top-[10vh] m:left-[2rem] m:w-1/3 m:bg-white m:items-center  ${isDropdownOpen ? 'hidden' : 'block'}`}>
            <li className="text-gray-600 hover:text-gray-800">
              <Link to="/inspiration">Inspiration</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800">
              <Link to="/find-work">Find Work</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800">
              <Link to="/learn-design">Learn Design</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800">
              <Link to="/go-pro">Go Pro</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800">
              <Link to="/hire-designers">Hire Designers</Link>
            </li>
          </ul>
        </div>
        <div className="flex p-4 justify-center items-center m:p-2">
          <ul className="flex list-none justify-around gap-4">
            <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 text-slate-300 border-none rounded-md bg-gray-100 m:w-[2rem]"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-[15px] h-[15px] fill-slate-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex items-center">
              <svg
                className="w-[25px] h-[25px] fill-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
              </svg>
            </li>
            <li>
              <Link to="/profile">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={avatar}
                  alt="Profile"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <button
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold w-[6rem] m:w-[4rem] m:p-2 m:text-sm h-10  text-center rounded"
                >
                  Upload
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
