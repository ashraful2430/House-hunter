import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import OwnerHouse from "../Pages/OwnerHouse/OwnerHouse";
import OwnerProfile from "../Pages/OwnerProfile/OwnerProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "owner-house",
        element: <OwnerHouse />,
      },
      {
        path: "owner-profile",
        element: <OwnerProfile></OwnerProfile>,
      },
    ],
  },
]);

export default router;
