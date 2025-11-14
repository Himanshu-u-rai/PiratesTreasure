import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Theme Toggle
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(currentTheme + "-mode");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
