import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ children, path }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active font-bold" : "")}
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
