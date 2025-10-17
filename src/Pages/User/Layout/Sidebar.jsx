import React from "react";
import { Icon } from "@iconify/react";
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
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="iconamoon:profile-light" width="20" height="20" />
            <p>Profile</p>
          </div>
        </NavLink>

        <NavLink
          to="/user/Demographics"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="uil:graph-bar" width="20" height="20" />{" "}
            <p>Demographics</p>
          </div>
        </NavLink>

        <NavLink
          to="/user/SavedPolls"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="ep:collection-tag" width="20" height="20" />
            <p>Saved Polls</p>
          </div>
        </NavLink>

        <NavLink
          to="/user/Settings"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="solar:settings-linear" width="20" height="20" />
            <p>Settings</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
