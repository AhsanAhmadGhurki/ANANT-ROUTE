import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen">
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/user"
          end
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-black hover:bg-gray-100"
            }`
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/user/Demographics"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-black hover:bg-gray-100"
            }`
          }
        >
          Demographics
        </NavLink>

        <NavLink
          to="/user/SavedPolls"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-black hover:bg-gray-100"
            }`
          }
        >
          Saved Polls
        </NavLink>

        <NavLink
          to="/user/Settings"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-black hover:bg-gray-100"
            }`
          }
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
