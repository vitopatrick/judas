import Link from "next/link";
import React from "react";

type Props = {};

const links = ["about", "contact"];

const NavBar = (props: Props) => {
  return (
    <nav className=" bg-white py-3">
      {/* container and flex wrapper */}
      <div className="w-full mx-auto md:p-3 py-3 px-2  md:w-[85%] flex justify-between gap-[2rem] items-center">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="block font-body md:text-3xl text-2xl font-bold md:tracking-widest"
          >
            Capital<span className="text-sky-500">Mine</span>
          </Link>
        </div>
        {/* Links */}
        <div className="space-x-5 hidden md:block">
          {links.map((link) => (
            <Link
              href={`/${link}`}
              key={link}
              className="hover:text-sky-700 uppercase font-db"
            >
              {link}
            </Link>
          ))}
        </div>
        {/* Register and login button */}
        <div className="font-body space-x-4">
          <Link
            href="/auth/sign-in"
            className="uppercase border text-sm  font-semibold text-sky-700 border-sky-700 px-3 py-2 rounded md:px-6 md:py-2"
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-sky-700 text-sm  rounded text-white font-semibold md:px-6 md:py-2 px-3 py-2 uppercase"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
