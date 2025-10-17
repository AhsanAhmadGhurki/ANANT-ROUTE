import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex items-center justify-between container mx-auto py-4 ">
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Logo image */}
          <Link
            to="/"
            className="text-xl font-semibold text-indigo-600 inline-flex items-center"
          >
            <img
              src="/images/anant.png"
              alt="Anant Logo"
              className="h-9 w-auto object-contain"
            />
            <span className="sr-only">MyApp</span>
          </Link>

          {/* Search bar (hidden on small screens) */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-[393px]">
            <Icon icon="mdi:magnify" className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search Polls or Creators"
              className="bg-transparent ml-2 flex-1 text-base text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <span className="text-gray-400 text-base">/</span>
          </div>
          {/* Middle links */}
          <div className="hidden md:flex items-center gap-6 text-base text-gray-800 ml-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-semibold no-underline" : "no-underline"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/Workshop"
              className={({ isActive }) =>
                isActive ? "font-semibold no-underline" : "no-underline"
              }
            >
              Workshop
            </NavLink>

            <NavLink
              to="/Swag"
              className={({ isActive }) =>
                isActive ? "font-semibold no-underline" : "no-underline"
              }
            >
              Swag
            </NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/auth"
            className="text-base text-[#FF6B6B] no-underline h-10 flex items-center"
            style={{ textDecoration: "none" }}
          >
            Log in
          </Link>

          <Link
            to="/"
            className="bg-[#FF6B6B] text-white text-base px-4 h-10 flex items-center rounded-md hover:bg-[#ff4f4f] transition no-underline"
            style={{ textDecoration: "none" }}
          >
            Sign up
          </Link>

          <button className="md:hidden h-10 w-10 flex items-center justify-center">
            <Icon icon="mdi:menu" className="text-xl text-gray-700" />
          </button>
        </div>
      </nav>
    </div>
  );
}
