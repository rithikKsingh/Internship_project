import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";

const ProtectedRoutesComponent = ({ admin }) => {
  const [isAuth, setIsAuth] = useState(undefined); // Initialize isAuth as undefined initially

  useEffect(() => {
    axios.get("/api/get-token")
      .then(response => {
        if (response.data.token) {
          setIsAuth(response.data.token); // Set isAuth state to token value
        } else {
          setIsAuth(null); // Set isAuth state to null if token is not received
        }
      })
      .catch(error => {
        setIsAuth(null); // Handle errors by setting isAuth state to null
        console.error("Error fetching token:", error);
      });
  }, []); // Empty dependency array to run effect only once

  if (isAuth === undefined) return <LoginPage />; // Show LoginPage while waiting for token

  // Redirect based on authentication status and admin flag
  if (isAuth && admin && isAuth !== "admin") {
    return <Navigate to="/login" />;
  } else if (isAuth && admin) {
    return <Outlet />;
  } else if (isAuth && !admin) {
    return (
      <>
        <UserChatComponent />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutesComponent;
