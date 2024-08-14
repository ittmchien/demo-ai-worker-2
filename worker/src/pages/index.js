import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tuyển Công Nhân</title>
        <meta name="description" content="Ứng dụng tuyển dụng công nhân" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Chào mừng đến với Tuyển Công Nhân
        </h1>
        <p className="mb-4">Tìm kiếm cơ hội việc làm phù hợp với bạn.</p>
        <Link
          href="/jobs"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Xem danh sách công việc
        </Link>
      </main>
    </Layout>
  );
}
