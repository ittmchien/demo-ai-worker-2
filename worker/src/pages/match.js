import JobCard from "@/components/JobCard";
import Head from "next/head";
import { useState } from "react";
import JobAlerts from "../components/JobAlerts";
import Layout from "../components/Layout";
import { allJobs } from "./jobs";

export default function JobMatch() {
  const [userProfile, setUserProfile] = useState({
    skills: "",
    experience: "",
    location: "",
    salary: "",
  });
  const [matchedJobs, setMatchedJobs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matches = allJobs.filter((job) => {
      const skillMatch = job.skills.some((skill) =>
        userProfile.skills.toLowerCase().includes(skill.toLowerCase())
      );
      const locationMatch = job.location
        .toLowerCase()
        .includes(userProfile.location.toLowerCase());
      const salaryMatch = job.salary
        .toLowerCase()
        .includes(userProfile.salary.toLowerCase());

      return skillMatch && locationMatch && salaryMatch;
    });
    setMatchedJobs(matches);
  };

  return (
    <Layout>
      <Head>
        <title>Tìm Việc Phù Hợp | Tuyển Công Nhân</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Tìm Việc Phù Hợp
        </h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="skills" className="block mb-2">
                Kỹ năng
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={userProfile.skills}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Ví dụ: may, điện tử, xây dựng"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block mb-2">
                Kinh nghiệm (năm)
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={userProfile.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="location" className="block mb-2">
                Địa điểm
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={userProfile.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Ví dụ: Hà Nội, Hồ Chí Minh"
              />
            </div>
            <div>
              <label htmlFor="salary" className="block mb-2">
                Mức lương mong muốn
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={userProfile.salary}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Ví dụ: 5-7 triệu"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Tìm việc phù hợp
          </button>
        </form>

        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8">
          Công việc phù hợp
        </h2>
        {matchedJobs.length > 0 ? (
          <div className="space-y-4">
            {matchedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <p>
            Chưa có công việc phù hợp. Hãy điều chỉnh thông tin tìm kiếm của
            bạn.
          </p>
        )}
        <JobAlerts />
      </main>
    </Layout>
  );
}
