import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const statusColors = {
  applied: "bg-yellow-200",
  received: "bg-blue-200",
  viewed: "bg-purple-200",
  accepted: "bg-green-200",
  rejected: "bg-red-200",
};

export default function ApplicationTracker() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Trong thực tế, bạn sẽ gọi API để lấy dữ liệu từ server
    const mockApplications = [
      {
        id: 1,
        jobTitle: "Công nhân may",
        company: "Công ty May Mặc ABC",
        status: "applied",
        appliedDate: "2024-08-10",
      },
      {
        id: 2,
        jobTitle: "Công nhân điện tử",
        company: "Công ty Điện tử XYZ",
        status: "received",
        appliedDate: "2024-08-08",
      },
      {
        id: 3,
        jobTitle: "Công nhân xây dựng",
        company: "Công ty Xây dựng 123",
        status: "viewed",
        appliedDate: "2024-08-05",
      },
      {
        id: 4,
        jobTitle: "Công nhân lắp ráp",
        company: "Nhà máy Lắp ráp DEF",
        status: "accepted",
        appliedDate: "2024-08-01",
      },
    ];
    setApplications(mockApplications);
  }, []);

  const getStatusText = (status) => {
    switch (status) {
      case "applied":
        return "Đã nộp";
      case "received":
        return "Đã nhận";
      case "viewed":
        return "Đã xem";
      case "accepted":
        return "Chấp nhận";
      case "rejected":
        return "Từ chối";
      default:
        return "Không xác định";
    }
  };

  return (
    <Layout>
      <Head>
        <title>Theo dõi đơn ứng tuyển | Tuyển Công Nhân</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Theo dõi đơn ứng tuyển
        </h1>

        {applications.length > 0 ? (
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="border rounded-lg p-4 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">{app.jobTitle}</h2>
                <p className="text-gray-600 mb-2">{app.company}</p>
                <p className="text-sm text-gray-500 mb-2">
                  Ngày nộp: {app.appliedDate}
                </p>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm ${
                    statusColors[app.status]
                  }`}
                >
                  {getStatusText(app.status)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Bạn chưa có đơn ứng tuyển nào.</p>
        )}
      </main>
    </Layout>
  );
}
