import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
