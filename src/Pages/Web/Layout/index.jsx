import Footer from "../../../components/Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function WebLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
