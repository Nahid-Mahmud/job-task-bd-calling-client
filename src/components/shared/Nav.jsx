import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import CustomNavLink from "../Custom/CustomNavLink";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Nav = () => {
  const mobileNavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="bg-blue-50 relative">
      <nav className="flex lg:max-w-7xl px-5 xl:px-0 mx-auto items-center justify-between">
        <div className="cursor-pointer lg:hidden">
          <FaBars className="text-3xl" onClick={toggleSidebar} />
        </div>

        <div className="hidden lg:flex gap-5">
          <CustomNavLink path="/">Home</CustomNavLink>
          <CustomNavLink path="/about">About</CustomNavLink>
          <CustomNavLink path="/contact">Contact</CustomNavLink>
        </div>

        <div className="ml-10 md:ml-0">
          <img className="h-20 md:h-auto" src={Logo} alt="Logo" />
        </div>

        <div className="flex gap-5">
          <div className="hidden lg:inline-block">
            <CustomNavLink path="/manage-rentals">Manage Rentals</CustomNavLink>
          </div>
          <CustomNavLink path="/signIn">Sign In</CustomNavLink>
        </div>
      </nav>

      {/* Sidebar for small devices */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicking outside
      >
        <div
          ref={mobileNavRef}
          className={`fixed top-0 left-0 w-64 h-full bg-blue-50 p-4 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button className="text-gray-500" onClick={toggleSidebar}>
              <MdCancel className="text-2xl" />
            </button>
          </div>
          <nav className="mt-8">
            <ul className="flex flex-col gap-4">
              <li>
                <CustomNavLink path="/" onClick={toggleSidebar}>
                  Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink path="/about" onClick={toggleSidebar}>
                  About
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink path="/contact" onClick={toggleSidebar}>
                  Contact
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink path="/manage-rentals" onClick={toggleSidebar}>
                  Manage Rentals
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink path="/signIn" onClick={toggleSidebar}>
                  Sign In
                </CustomNavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
