import Link from "next/link";
import React from "react";

type Props = {};

const links = ["about", "contact"];

const NavBar = (props: Props) => {
  return (
    <nav className="sticky top-0 bg-white py-3">
      {/* container and flex wrapper */}
      <div className="w-[90%] mx-auto p-3 md:w-[85%] flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="block font-body text-3xl font-bold tracking-widest"
          >
            Capital<span className="text-sky-500">Mine</span>
          </Link>
        </div>
        {/* Links */}
        <div className="space-x-5 capitalize font-num">
          {links.map((link) => (
            <Link
              href={`/${link}`}
              key={link}
              className="hover:text-sky-700 capitalize"
            >
              {link}
            </Link>
          ))}
        </div>
        {/* Register and login button */}
        <div className="font-body space-x-4">
          <Link
            href="/auth/sign-in"
            className="uppercase border font-semibold text-sky-700 border-sky-700 rounded px-6 py-2"
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-sky-700 rounded text-white font-semibold px-6 py-2 uppercase"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
