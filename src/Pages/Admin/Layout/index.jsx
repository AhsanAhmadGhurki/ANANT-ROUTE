import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";
import Sidebar from "./Sidebar";
import AppHeader from "../../../components/AppHeader.jsx";

export default function AdminLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed header */}
      <div className="sticky top-0 z-50 bg-white">
        <AppHeader />
      </div>

      <div className="flex flex-1 container mx-auto gap-10 py-6 overflow-hidden">
        {/* Fixed sidebar */}
        <div className="w-64 flex-shrink-0å sticky top-[88px] self-start">
          <Sidebar />
        </div>

        {/* Scrollable main content with hidden scrollbar */}
        <main className="flex-1 p-4 overflow-y-auto no-scrollbar">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
