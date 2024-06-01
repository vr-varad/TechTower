import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <div className="text-blue-600 flex flex-col">
        <Link to={"/users/1"}>User 1</Link>
        <Link to={"/users/2"}>User 2</Link>
        <Link to={"/users/new"}>New User?</Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default UserLayout;
