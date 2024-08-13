import { Outlet } from "react-router-dom";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import { useEffect, useState } from "react";
import PreLoader from "../components/shared/PreLoader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to check if all resources are loaded
    const handleAllResourcesLoaded = () => {
      setLoading(false); // Set loading to false when all resources are loaded
    };

    // Check if all resources are loaded initially
    if (document.readyState === "complete") {
      handleAllResourcesLoaded();
    }

    // Event listener for the "load" event of the DOM
    const handleLoad = () => {
      handleAllResourcesLoaded();
    };

    // Add event listener for "load" event
    window.addEventListener("load", handleLoad);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
