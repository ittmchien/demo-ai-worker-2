import Head from "next/head";
import Layout from "../components/Layout";

export default function Apply() {
  return (
    <Layout>
      <Head>
        <title>Ứng tuyển | Tuyển Công Nhân</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Ứng tuyển công việc</h1>
        <form className="max-w-lg">
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
            >
              <option value="">Chọn vị trí</option>
              <option value="may">Công nhân may</option>
              <option value="dien-tu">Công nhân điện tử</option>
              <option value="xay-dung">Công nhân xây dựng</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Gửi đơn ứng tuyển
          </button>
        </form>
      </main>
    </Layout>
  );
}
