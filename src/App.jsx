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
        path: "/Workshop",
        element: <Workshop />,
      },
      {
        path: "/Swag",
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
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
