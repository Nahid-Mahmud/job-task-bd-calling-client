import { Outlet } from "react-router-dom";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import { useEffect, useState } from "react";
import PreLoader from "../components/shared/PreLoader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleAllResourcesLoaded = () => {
      timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };

    if (document.readyState === "complete") {
      handleAllResourcesLoaded();
    }

    const handleLoad = () => {
      handleAllResourcesLoaded();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (loading) return <PreLoader />;

  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
