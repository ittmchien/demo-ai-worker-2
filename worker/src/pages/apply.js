import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Trong thực tế, bạn sẽ gửi dữ liệu này đến server
    console.log("Đơn ứng tuyển:", formData);

    // Giả lập việc gửi đơn thành công
    alert("Đơn ứng tuyển của bạn đã được gửi thành công!");

    // Chuyển hướng người dùng đến trang theo dõi đơn
    router.push("/application-tracker");
  };

  return (
    <Layout>
      <Head>
        <title>Ứng tuyển | Tuyển Công Nhân</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Ứng tuyển công việc
        </h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="block mb-2">
              Vị trí ứng tuyển
            </label>
            <select
              id="position"
              name="position"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.position}
              onChange={handleInputChange}
            >
              <option value="">Chọn vị trí</option>
              <option value="may">Công nhân may</option>
              <option value="dien-tu">Công nhân điện tử</option>
              <option value="xay-dung">Công nhân xây dựng</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Gửi đơn ứng tuyển
          </button>
        </form>
      </main>
    </Layout>
  );
}
