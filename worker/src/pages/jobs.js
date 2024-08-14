import Head from "next/head";
import Link from "next/link";
import JobCard from "../components/JobCard";
import Layout from "../components/Layout";

export const allJobs = [
  {
    id: 1,
    title: "Công nhân may",
    location: "Hà Nội",
    salary: "5-7 triệu",
    skills: ["may", "thời trang"],
  },
  {
    id: 2,
    title: "Công nhân điện tử",
    location: "Hồ Chí Minh",
    salary: "6-8 triệu",
    skills: ["điện tử", "hàn"],
  },
  {
    id: 3,
    title: "Công nhân xây dựng",
    location: "Đà Nẵng",
    salary: "7-10 triệu",
    skills: ["xây dựng", "sơn"],
  },
  {
    id: 4,
    title: "Công nhân lắp ráp",
    location: "Hải Phòng",
    salary: "5-7 triệu",
    skills: ["lắp ráp", "cơ khí"],
  },
  {
    id: 5,
    title: "Công nhân dệt",
    location: "Nam Định",
    salary: "6-8 triệu",
    skills: ["dệt", "may"],
  },
];

export default function Jobs() {
  return (
    <Layout>
      <Head>
        <title>Danh sách công việc | Tuyển Công Nhân</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Danh sách công việc
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {allJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <Link
          href="/apply"
          className="mt-8 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ứng tuyển ngay
        </Link>
      </main>
    </Layout>
  );
}
