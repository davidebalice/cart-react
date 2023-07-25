import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotLogged = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <div>
      <div>User not logged</div>
    </div>
  );
};

export default NotLogged;
