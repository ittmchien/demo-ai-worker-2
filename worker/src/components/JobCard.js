export default function JobCard({ job }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-2">Địa điểm: {job.location}</p>
      <p className="text-gray-600 mb-2">Lương: {job.salary}</p>
      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
        Chi tiết
      </button>
    </div>
  );
}
