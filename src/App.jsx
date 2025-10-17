import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebLayout from "./Pages/Web/Layout";
import Workshop from "./Pages/Web/Pages/Workshop/index";
import Swag from "./Pages/Web/Pages/Swag/index";
import About from "./Pages/Web/Pages/About/index";
import AuthLayout from "./Pages/Auth";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
