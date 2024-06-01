import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserById from "./pages/UserById";
import NewUser from "./pages/NewUser";
import UserLayout from "./pages/UserLayout";

const App = () => {
  return (
    <>
      <nav>
        <ul className=" flex gap-10 text-blue-600">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
          <li>
            <Link to={"/users/new"}>New Users?</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/users" element={<UserLayout/>}>
          <Route index element={<Users/>} /> 
          <Route path=":id" element={<UserById />} />
          <Route path="new" element={<NewUser />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
