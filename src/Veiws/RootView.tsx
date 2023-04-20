import React from "react";
import { useAppSelector } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const RootView: React.FC<{}> = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto p-2 mt-2 pt-16 border border-gray-100 shadow-md rounded-sm min-h-fit flex">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default RootView;
