import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";
import Sidebar from "./sidebar.jsx";
import AppHeader from "../../../components/AppHeader.jsx";

export default function CreatorLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <AppHeader />

      {/* Main content with sidebar */}
      <div className="flex flex-1 container mx-auto gap-10 py-6">
        <Sidebar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
}
