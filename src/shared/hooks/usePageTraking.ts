import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-D56V86CSKD", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);
};

export default usePageTracking;
