import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ children, path, ...rest }) => {
  return (
    <NavLink
      {...rest}
      className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active font-bold" : "")}
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
