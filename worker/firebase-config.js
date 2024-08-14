// firebase-config.js
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  // Thay thế bằng cấu hình Firebase của bạn
  //   apiKey: "YOUR_API_KEY",
  //   authDomain: "YOUR_AUTH_DOMAIN",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_STORAGE_BUCKET",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  //   appId: "YOUR_APP_ID",
  apiKey: "AIzaSyDFonz7KtnH8Q3sro2J64NQsV5CjHl62uo",
  authDomain: "fir-worker-1eef3.firebaseapp.com",
  projectId: "fir-worker-1eef3",
  storageBucket: "fir-worker-1eef3.appspot.com",
  messagingSenderId: "1067430980289",
  appId: "1:1067430980289:web:70360868eb5207d52fc240",
  measurementId: "G-7EDJV5FCEJ",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };
