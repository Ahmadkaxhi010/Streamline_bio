"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] py-10 px-8 text-gray-700 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo and Copyright */}
        <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <Link href="/">
          <div className="mb-4">
            {/* Replace with your logo */}
            <img src="/images/mainl.png" alt="Logo" className="h-8" />
          </div>
          </Link>
          <p>StreamLineBio © 2024</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 text-[#6f6f67] md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              ABOUT
            </Link>
            {/* <Link
              href="/discover"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              DISCOVER
            </Link> */}
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col gap-2">
            <Link
              href="https://www.linkedin.com/company/streamline-bio/"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              LINKEDIN
            </Link>
            <Link
              href="#"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              YOUTUBE
            </Link>
            <Link
              href="#"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              INSTAGRAM
            </Link>
            <Link
              href="#"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              TIKTOK
            </Link>
            <Link
              href="#"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              X
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              TERMS OF USE
            </Link>
            <Link
              href="#"
              className="inline-block w-max hover:border-b-2 border-transparent border-b-[#6f6f67] transition-all duration-500 ease-in-out delay-75"
            >
              PRIVACY & COOKIES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
