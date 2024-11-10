"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[70px] px-[32px] fixed w-full z-[99] transition-all duration-300 ease-in group border-b-[1px] lg:py-0 lg:h-[60px] xl:px-0 border-b-[#0000]">
      <div className="bg-transparent flex justify-between items-center h-full xl:w-[2036px] xl:mx-auto xl:px-[32px]">
        <a
          className="bg-transparent lg:h-full lg:flex lg:justify-center lg:items-center"
          aria-label="Home"
          href="/"
        >
          <div className="relative bg-transparent">
            <svg
              className="bg-transparent w-[32px] h-[20px] transition-colors duration-300 relative z-[1]"
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.699 15.1299C25.6859 15.5128 25.5403 15.7825 25.248 15.9137C24.8209 16.1058 24.5071 15.8624 24.2196 15.5713C22.9454 14.2756 21.6724 12.98 20.3934 11.689C18.574 9.85052 17.3606 9.84217 15.5627 11.6556C14.3135 12.9155 13.0679 14.1778 11.8236 15.4413C11.4501 15.8207 11.0421 16.274 10.51 15.7884C9.923 15.2528 10.3573 14.7922 10.7725 14.3723C12.2328 12.8952 13.6597 11.386 15.1534 9.94358C16.7343 8.41525 18.8723 8.25538 20.4316 9.67037C22.1604 11.2381 23.7448 12.9621 25.3829 14.6264C25.5284 14.7743 25.6083 14.9843 25.6978 15.1299H25.699Z"
                fill="#F8F8F8"
              ></path>
              <path
                d="M17.9015 7.21649C16.8504 7.22842 15.9508 6.85022 15.2147 6.11648C13.715 4.62036 12.2308 3.10993 10.7407 1.60427C10.3625 1.2213 9.95442 0.781053 10.4328 0.276382C10.9888 -0.311803 11.4362 0.170199 11.8419 0.580616C13.1769 1.93476 14.4965 3.3056 15.8506 4.64065C17.2536 6.02342 18.6543 6.027 20.0514 4.65258C21.3769 3.34974 22.6618 2.00634 23.973 0.689186C24.387 0.272803 24.8273 -0.370264 25.4668 0.27161C26.0263 0.834741 25.4859 1.28453 25.0933 1.68302C23.6688 3.13141 22.2383 4.57383 20.809 6.01745C20.0108 6.82397 19.054 7.25706 17.9015 7.2153V7.21649Z"
                fill="#F8F8F8"
              ></path>
              <path
                d="M7.46868 2.38692C7.47703 3.1648 7.48419 3.93911 7.2933 4.70506C6.91032 6.24532 5.94751 7.16637 4.381 7.46822C3.26071 7.68297 2.12967 7.57917 1.00222 7.5911C0.478458 7.59468 0.00480805 7.42169 3.57557e-05 6.81919C-0.00473654 6.19998 0.468914 6.07829 0.997445 6.08187C1.77891 6.08783 2.56276 6.1105 3.34184 6.07351C4.9501 5.99716 5.89143 5.04151 5.94751 3.4404C5.97614 2.62076 5.95944 1.79992 5.95347 0.97909C5.9499 0.42789 6.15868 0.0127 6.75761 0.0425268C7.27779 0.0675813 7.46271 0.476806 7.46629 0.96C7.46987 1.43484 7.46629 1.90969 7.46629 2.38453L7.46868 2.38692Z"
                fill="#F8F8F8"
              ></path>
              <path
                d="M5.95483 12.205C5.95483 11.2577 5.95483 10.3104 5.95483 9.36312C5.95483 8.88589 6.09204 8.47666 6.63727 8.44206C7.26006 8.4015 7.46169 8.83936 7.46527 9.36431C7.4772 11.2589 7.47839 13.1535 7.46527 15.0469C7.46169 15.5707 7.25648 16.0121 6.63727 15.9704C6.0992 15.9346 5.95483 15.5253 5.95603 15.0457C5.95961 14.0984 5.95603 13.1511 5.95603 12.2038L5.95483 12.205Z"
                fill="#F8F8F8"
              ></path>
            </svg>
            <svg
              className="w-[32px] h-[20px] transition-opacity duration-300 opacity-0 absolute z-[2] inset-0"
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.699 15.1299C25.6859 15.5128 25.5403 15.7825 25.248 15.9137C24.8209 16.1058 24.5071 15.8624 24.2196 15.5713C22.9454 14.2756 21.6724 12.98 20.3934 11.689C18.574 9.85052 17.3606 9.84217 15.5627 11.6556C14.3135 12.9155 13.0679 14.1778 11.8236 15.4413C11.4501 15.8207 11.0421 16.274 10.51 15.7884C9.923 15.2528 10.3573 14.7922 10.7725 14.3723C12.2328 12.8952 13.6597 11.386 15.1534 9.94358C16.7343 8.41525 18.8723 8.25538 20.4316 9.67037C22.1604 11.2381 23.7448 12.9621 25.3829 14.6264C25.5284 14.7743 25.6083 14.9843 25.6978 15.1299H25.699Z"
                fill="#41403C"
              ></path>
              <path
                d="M17.9015 7.21649C16.8504 7.22842 15.9508 6.85022 15.2147 6.11648C13.715 4.62036 12.2308 3.10993 10.7407 1.60427C10.3625 1.2213 9.95442 0.781053 10.4328 0.276382C10.9888 -0.311803 11.4362 0.170199 11.8419 0.580616C13.1769 1.93476 14.4965 3.3056 15.8506 4.64065C17.2536 6.02342 18.6543 6.027 20.0514 4.65258C21.3769 3.34974 22.6618 2.00634 23.973 0.689186C24.387 0.272803 24.8273 -0.370264 25.4668 0.27161C26.0263 0.834741 25.4859 1.28453 25.0933 1.68302C23.6688 3.13141 22.2383 4.57383 20.809 6.01745C20.0108 6.82397 19.054 7.25706 17.9015 7.2153V7.21649Z"
                fill="#41403C"
              ></path>
              <path
                d="M7.46868 2.38692C7.47703 3.1648 7.48419 3.93911 7.2933 4.70506C6.91032 6.24532 5.94751 7.16637 4.381 7.46822C3.26071 7.68297 2.12967 7.57917 1.00222 7.5911C0.478458 7.59468 0.00480805 7.42169 3.57557e-05 6.81919C-0.00473654 6.19998 0.468914 6.07829 0.997445 6.08187C1.77891 6.08783 2.56276 6.1105 3.34184 6.07351C4.9501 5.99716 5.89143 5.04151 5.94751 3.4404C5.97614 2.62076 5.95944 1.79992 5.95347 0.97909C5.9499 0.42789 6.15868 0.0127 6.75761 0.0425268C7.27779 0.0675813 7.46271 0.476806 7.46629 0.96C7.46987 1.43484 7.46629 1.90969 7.46629 2.38453L7.46868 2.38692Z"
                fill="#41403C"
              ></path>
              <path
                d="M5.95483 12.205C5.95483 11.2577 5.95483 10.3104 5.95483 9.36312C5.95483 8.88589 6.09204 8.47666 6.63727 8.44206C7.26006 8.4015 7.46169 8.83936 7.46527 9.36431C7.4772 11.2589 7.47839 13.1535 7.46527 15.0469C7.46169 15.5707 7.25648 16.0121 6.63727 15.9704C6.0992 15.9346 5.95483 15.5253 5.95603 15.0457C5.95961 14.0984 5.95603 13.1511 5.95603 12.2038L5.95483 12.205Z"
                fill="#41403C"
              ></path>
            </svg>
          </div>
        </a>
        <button
          onClick={toggleMenu}
          className="w-[24px] flex justify-between gap-y-[5px] flex-col z-[100] lg:hidden"
        >
          <span className="w-full h-[1px] bg-slate-200 block rounded-full transition-colors duration-300"></span>
          <span className="w-full h-[1px] bg-slate-200 block rounded-full transition-[background-color,transform]  duration-300"></span>
          <span className="w-full h-[1px] bg-slate-200 block rounded-full transition-[background-color,transform] duration-300"></span>
          <span className="w-full h-[1px] bg-slate-200 block rounded-full transition-colors duration-300"></span>
        </button>
        <nav className="bg-transparent hidden lg:self-end lg:block ">
          <div className="bg-transparent flex gap-x-[40px] font-medium uppercase text-[11px] leading-[20px] tracking-[0.8px] h-fit items-center text-neoFrost transition-colors duration-300">
            <div className="bg-transparent flex gap-x-[50px]">
              <a
                className="bg-transparent text-[#e5e7eb] block relative whitespace-nowrap font-medium transition-opacity duration-200 h-[37px] opacity-50 hover:opacity-100"
                href="/"
              >
                Home
              </a>
              <a
                className="bg-transparent block relative text-[#e5e7eb] whitespace-nowrap font-medium transition-opacity duration-200 h-[37px] opacity-50 hover:opacity-100"
                href="/about"
              >
                About
                {pathname === "/about" && (
                  <div
                    className="w-full bottom-[-1px] bg-[#e5e7eb] left-0 absolute z-[1] h-[2px] bg-neoFrost transition-colors duration-300"
                    style={{ opacity: "1", transformOrigin: "50% 0px 0px" }}
                  ></div>
                )}
              </a>
              <a
                className="bg-transparent text-[#e5e7eb] block relative whitespace-nowrap font-medium transition-opacity duration-200 h-[37px] opacity-50 hover:opacity-100"
                href="/discover"
              >
                Discover
              </a>
            </div>
          </div>
        </nav>
        <a
          className="whitespace-nowrap font-medium uppercase text-[12px] tracking-[0.8px] leading-[20px] text-white self-end hidden h-[37px] hover:opacity-50 [transition:opacity_0.3s,color_0.3s] lg:block"
          href="/neo"
        >
          Get updates
        </a>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[98] flex flex-col bg-[#fff] pt-[88px] h-[100dvh] lg:hidden"
          style={{ transform: "translateX(0%) translateZ(0px)" }}
        >
          <div className="flex-grow overflow-y-auto">
            <nav className="flex flex-col px-[32px]">
              <Link
                href="/"
                className="bodyRegular border-b-[1px] py-[16px] text-neoGrey"
              >
                Home
              </Link>
              <Link
                href="/discover"
                className="bodyRegular border-b-[1px] py-[16px] text-neoGrey"
              >
                Discover
              </Link>
              <Link
                href="/about"
                className="bodyRegular border-b-[1px] py-[16px] text-neoGrey"
              >
                About
              </Link>
            </nav>
          </div>
          <div className="px-[32px] py-[32px] bodyRegular text-neoGrey flex flex-col gap-y-[12px]">
            <Link
              href="/privacy-policy"
              className="opacity-60 hover:opacity-100"
            >
              Privacy & Cookies
            </Link>
            <Link
              href="/terms-and-conditions"
              className="opacity-60 hover:opacity-100"
            >
              Terms of Use
            </Link>
            <span className="opacity-60">1X © 2024</span>
          </div>
        </div>
      )}
    </header>
  );
}
