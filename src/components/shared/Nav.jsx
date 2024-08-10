import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import CustomNavLink from "../Custom/CustomNavLink";

const Nav = () => {
  return (
    <div className="bg-blue-50">
      <nav className="flex max-w-7xl mx-auto items-center justify-between">
        <div className="flex gap-5">
          <CustomNavLink path="/">Home</CustomNavLink>
          <CustomNavLink path="/about">About</CustomNavLink>
          <CustomNavLink path="/contact">Contact</CustomNavLink>
        </div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-5">
          <CustomNavLink path="/manage-rentals">Manage Rentals</CustomNavLink>
          <CustomNavLink path="/signIn"> Sign In</CustomNavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
