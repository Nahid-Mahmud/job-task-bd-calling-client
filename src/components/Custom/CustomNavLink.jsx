import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ children, path, ...rest }) => {
  return (
    <NavLink
      {...rest}
      className={({ isActive, isPending }) =>
        isPending ? "pending " : isActive ? "active font-bold" : "hover:font-bold transition-all duration-200"
      }
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
