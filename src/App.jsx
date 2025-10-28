import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebLayout from "./Pages/Web/Layout";
import Swag from "./Pages/Web/Swag/index";
import About from "./Pages/Web/About/index";
import AuthLayout from "./Pages/Auth";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Profile from "./Pages/User/Profile/Profile";
import UserLayout from "./Pages/User/Layout";
import Workshop from "./Pages/Web/Workshop";
import Demographics from "./Pages/User/Demographics";
import Settings from "./Pages/User/Settings";
import SavedPolls from "./Pages/User/SavedPolls";
import Dashboard from "./Pages/Creator/Dashboard";
import CreatorLayout from "./Pages/Creator/Layout";
import NewPolls from "./Pages/Creator/NewPolls";
import ActivePolls from "./Pages/Creator/ActivePolls";
import AdminLayout from "./Pages/Admin/Layout";
import AdminDashboard from "./Pages/Admin/Dashboard";
import PollManagement from "./Pages/Admin/PollManagement";
import Moderation from "./Pages/Admin/Moderation";
import Users from "./Pages/Admin/Users";
import CreatorApprovals from "./Pages/Admin/CreatorApprovals";
import Categories from "./Pages/Admin/Categories";
import Analytics from "./Pages/Admin/Analytics";

const router = createBrowserRouter([
  {
    path: "/auth",

    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "Workshop",
        element: <Workshop />,
      },
      {
        path: "Swag",
        element: <Swag />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "Demographics",
        element: <Demographics />,
      },
      {
        path: "SavedPolls",
        element: <SavedPolls />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/creator",
    element: <CreatorLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "NewPolls",
        element: <NewPolls />,
      },
      {
        path: "ActivePolls",
        element: <ActivePolls />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Demographics",
        element: <Demographics />,
      },
      {
        path: "SavedPolls",
        element: <SavedPolls />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "NewPolls",
        element: <NewPolls />,
      },
      {
        path: "PollManagement",
        element: <PollManagement />,
      },
      {
        path: "Moderation",
        element: <Moderation />,
      },
      {
        path: "Users",
        element: <Users />,
      },
      {
        path: "CreatorApprovals",
        element: <CreatorApprovals />,
      },
      {
        path: "Categories",
        element: <Categories />,
      },
      {
        path: "Analytics",
        element: <Analytics />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
