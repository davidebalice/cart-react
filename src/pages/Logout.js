import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer/Footer";

const LogoutPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { isLoading } = useGlobalContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    handleLogout();
    navigate("/");
  }, []);

  if (isLoading) {
    return (
      <>
        <div>
          <Navbar />
          <div className="center-item">
            <Loading />
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return <div></div>;
};

export default LogoutPage;
