import React from "react";
import Link from "next/link";

const dropdown = ({ isOpen, toggle }: any) => {
  return (
    <div
      className={
        isOpen
          ? "flex flex-col items-center justify-center text-center text-white self-center"
          : "hidden"
      }
    >
      <Link href="/">
        <a className=" mt-3">About me</a>
      </Link>
      <Link href="/">
        <a className=" mt-1">Projects</a>
      </Link>
      <Link href="/">
        <a className=" mt-1">Contact</a>
      </Link>
    </div>
  );
};

export default dropdown;
