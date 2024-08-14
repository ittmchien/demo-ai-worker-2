// pages/_app.js
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("/firebase-messaging-sw.js");
          console.log("Service worker registered");
        } catch (error) {
          console.error("Service worker registration failed:", error);
        }
      }
    };

    const requestNotificationPermission = async () => {
      try {
        await Notification.requestPermission();
      } catch (error) {
        console.error("Notification permission request failed:", error);
      }
    };

    registerServiceWorker();
    requestNotificationPermission();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
