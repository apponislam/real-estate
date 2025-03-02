import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Register from "./Components/Register/Register.jsx";
import Home from "./Components/Home/Home.jsx";
import Errorpage from "./Components/Errorpage/Errorpage.jsx";
import SignInProtect from "./PrivateRoutes/SignInProtect.jsx";
import UpdateProfile from "./Components/UpdateProfile.jsx/UpdateProfile.jsx";
import NonSignIn from "./PrivateRoutes/NonSignIn.jsx";
import { HelmetProvider } from "react-helmet-async";
import Profile from "./Components/Profile/Profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LuxuaryDetails from "./Components/Home/LuxuaryDetails/LuxuaryDetails.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                loader: () => fetch("luxuary.json"),
                element: <Home></Home>,
            },
            {
                path: "/:luxuaryId",
                loader: () => fetch("luxuary.json"),
                element: (
                    <NonSignIn>
                        <LuxuaryDetails></LuxuaryDetails>
                    </NonSignIn>
                ),
            },
            {
                path: "/signin",
                element: (
                    <SignInProtect>
                        <SignIn></SignIn>
                    </SignInProtect>
                ),
            },
            {
                path: "/register",
                element: (
                    <SignInProtect>
                        <Register></Register>
                    </SignInProtect>
                ),
            },
            {
                path: "/updateprofile",
                element: (
                    <NonSignIn>
                        <UpdateProfile></UpdateProfile>
                    </NonSignIn>
                ),
            },
            {
                path: "/profile",
                element: (
                    <NonSignIn>
                        <Profile></Profile>
                    </NonSignIn>
                ),
            },
            {
                path: "/aboutus",
                element: (
                    <NonSignIn>
                        <AboutUs></AboutUs>
                    </NonSignIn>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={router} />
                <ToastContainer />
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>
);
