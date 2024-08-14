// components/JobAlerts.js
import { useState } from "react";

export default function JobAlerts() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  //   useEffect(() => {
  //     const checkSubscription = async () => {
  //       try {
  //         const currentToken = await getToken(messaging, {
  //           vapidKey:
  //             "BMRrI0MyYyvDGMdMirTxN2Bk6WM8ycdenv3OJpXTyGx-aYn4qLQS-bt-SGZwVTlKqCXqLD5N8laVjT8PZDzSb20",
  //         });
  //         if (currentToken) {
  //           setIsSubscribed(true);
  //         }
  //       } catch (error) {
  //         console.error("An error occurred while retrieving token:", error);
  //       }
  //     };

  //     checkSubscription();

  //     const unsubscribe = onMessage(messaging, (payload) => {
  //       console.log("Message received:", payload);
  //       // Hiển thị thông báo khi nhận được tin nhắn mới
  //       new Notification(payload.notification.title, {
  //         body: payload.notification.body,
  //         icon: "/favicon.ico",
  //       });
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);

  const handleSubscribe = async () => {
    // try {
    //   const permission = await Notification.requestPermission();
    //   if (permission === "granted") {
    //     const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
    //     if (token) {
    //       console.log("Notification permission granted. Token:", token);
    //       // Gửi token này lên server của bạn để lưu trữ
    //       // await sendTokenToServer(token);
    //       setIsSubscribed(true);
    //     }
    //   }
    // } catch (error) {
    //   console.error("An error occurred while subscribing:", error);
    // }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Thông báo công việc mới</h2>
      {isSubscribed ? (
        <p>Bạn đã đăng ký nhận thông báo về công việc mới.</p>
      ) : (
        <button
          onClick={handleSubscribe}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Đăng ký nhận thông báo
        </button>
      )}
    </div>
  );
}
