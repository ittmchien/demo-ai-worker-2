import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Tuyển Công Nhân
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-16 left-0 right-0 bg-blue-600 md:top-0`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
              <li>
                <Link href="/" className="block py-2 md:py-0">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="block py-2 md:py-0">
                  Công việc
                </Link>
              </li>
              <li>
                <Link href="/apply" className="block py-2 md:py-0">
                  Ứng tuyển
                </Link>
              </li>
              <li>
                <Link href="/match" className="block py-2 md:py-0">
                  Tìm việc phù hợp
                </Link>
              </li>
              <li>
                <Link
                  href="/application-tracker"
                  className="block py-2 md:py-0"
                >
                  Theo dõi đơn
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Tuyển Công Nhân. All rights reserved.</p>
      </footer>
    </div>
  );
}
