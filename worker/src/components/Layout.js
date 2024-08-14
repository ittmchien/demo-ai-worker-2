import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Tuyển Công Nhân
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/jobs">Công việc</Link>
            </li>
            <li>
              <Link href="/apply">Ứng tuyển</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Tuyển Công Nhân. All rights reserved.</p>
      </footer>
    </div>
  );
}
