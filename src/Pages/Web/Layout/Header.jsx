import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Drawer } from "antd";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div className="border-b border-gray-200">
      <nav className="flex items-center justify-between container mx-auto py-4 px-4">
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
          <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-[393px]">
            <Icon icon="mdi:magnify" className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search Polls or Creators"
              className="bg-transparent ml-2 flex-1 text-base text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <span className="text-gray-400 text-base">/</span>
          </div>
          {/* Middle links */}
          <div className="hidden lg:flex items-center gap-6 text-base text-gray-800 ml-4">
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
            className="hidden sm:flex text-base text-[#FF6B6B] no-underline h-10 items-center"
            style={{ textDecoration: "none" }}
          >
            Log in
          </Link>

          <Link
            to="/auth/signup"
            className="hidden sm:flex bg-[#FF6B6B] text-white text-base px-4 h-10 items-center rounded-md hover:bg-[#ff4f4f] transition no-underline"
            style={{ textDecoration: "none" }}
          >
            Sign up
          </Link>

          <button
            onClick={showDrawer}
            className="lg:hidden h-10 w-10 flex items-center justify-center"
            aria-label="Open menu"
          >
            <Icon icon="mdi:menu" className="text-xl text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center gap-2">
            <img
              src="/images/anant.png"
              alt="Anant Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        width={300}
      >
        <div className="flex flex-col gap-6">
          {/* Search bar in drawer */}
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <Icon icon="mdi:magnify" className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search Polls or Creators"
              className="bg-transparent ml-2 flex-1 text-base text-gray-700 placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-4 text-base text-gray-800">
            <button
              onClick={() => handleNavClick("/")}
              className="text-left hover:text-[#FF6B6B] transition"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick("/Workshop")}
              className="text-left hover:text-[#FF6B6B] transition"
            >
              Workshop
            </button>

            <button
              onClick={() => handleNavClick("/Swag")}
              className="text-left hover:text-[#FF6B6B] transition"
            >
              Swag
            </button>
          </div>

          {/* Auth buttons in drawer */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => handleNavClick("/auth")}
              className="text-base text-[#FF6B6B] h-10 flex items-center justify-center hover:bg-gray-50 rounded-md transition"
            >
              Log in
            </button>

            <button
              onClick={() => handleNavClick("/auth/signup")}
              className="bg-[#FF6B6B] text-white text-base px-4 h-10 flex items-center justify-center rounded-md hover:bg-[#ff4f4f] transition"
            >
              Sign up
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
