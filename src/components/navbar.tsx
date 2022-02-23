import React from "react";
import Link from "next/link";

const Navbar = ({ toggle }: any) => {
  return (
    <div className="flex items-center justify-center w-8/10 h-5 text-white font-sans mt-14 ">
      <div className="w-full text-2xl flex items-center justify-evenly px-44 md:flex hidden mt-50">
        <Link href="#about-me">
          <a className="font-mono ease-in hover:transition-all hover:opacity-75 hover:text-3xl">
            About me
          </a>
        </Link>
        <Link href="#projects">
          <a className="font-mono hover:transition-all hover:opacity-75 hover:text-3xl hover:ease-in">
            Projects
          </a>
        </Link>
        <Link href="#contact">
          <a className="font-mono hover:transition-all hover:opacity-75 hover:text-3xl hover:ease-in">
            Contact
          </a>
        </Link>
      </div>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
