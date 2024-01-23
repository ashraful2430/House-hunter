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
import RenterProfile from "../Pages/RenterProfile/RenterProfile";
import RentedHouse from "../Pages/RentedHouse/RentedHouse";

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
      {
        path: "renter-profile",
        element: <RenterProfile />,
      },
      {
        path: "rented-house",
        element: <RentedHouse />,
      },
    ],
  },
]);

export default router;
