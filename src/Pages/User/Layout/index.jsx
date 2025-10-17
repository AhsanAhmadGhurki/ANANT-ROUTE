import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../../../components/Footer";
import Sidebar from "./Sidebar";

export default function UserLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

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
