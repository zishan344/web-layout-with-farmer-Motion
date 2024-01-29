import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../button";

const Navbar = () => {
  return (
    <div>
      <header className="h-16">
        <nav className="w-full h-full max-w-[1230px] px-5 mx-auto flex justify-between items-center">
          <span className="text-3xl">iRepair</span>
          <ul className="space-x-5">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <Button>
              <NavLink to={"/login"}>Login</NavLink>
            </Button>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
