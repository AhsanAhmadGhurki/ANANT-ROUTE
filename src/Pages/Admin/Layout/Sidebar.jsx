import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen">
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin"
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
            <p>Dashboard</p>
          </div>
        </NavLink>

        <NavLink
          to="/admin/PollManagement"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="hugeicons:check-list" width="22" height="22" />{" "}
            <p>Poll Management</p>
          </div>
        </NavLink>

        <NavLink
          to="/admin/Moderation"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="ep:lock" width="20" height="20" />
            <p>Moderation</p>
          </div>
        </NavLink>

        <NavLink
          to="/admin/Users"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon
              icon="solar:users-group-two-rounded-linear"
              width="20"
              height="20"
            />
            <p>Users</p>
          </div>
        </NavLink>
        <NavLink
          to="/admin/CreatorApprovals"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="tabler:checks" width="22" height="22" />
            <p>Creator Approvals</p>
          </div>
        </NavLink>
        <NavLink
          to="/admin/Categories"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="streamline-flex:tag-alt" width="20" height="20" />
            <p>Categories</p>
          </div>
        </NavLink>
        <NavLink
          to="/admin/Analytics"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-[#FFF6F5] !text-[#FE6963] border border-[#FFD6D4]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <Icon icon="carbon:analytics" width="20" height="20" />
            <p>Analytics</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
