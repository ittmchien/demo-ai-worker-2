export default function JobCard({ job }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h2 className="text-lg md:text-xl font-semibold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-1">Địa điểm: {job.location}</p>
      <p className="text-gray-600 mb-1">Lương: {job.salary}</p>
      <p className="text-gray-600 mb-2">Kỹ năng: {job?.skills?.join(", ")}</p>
      <button className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
        Chi tiết
      </button>
    </div>
  );
}
