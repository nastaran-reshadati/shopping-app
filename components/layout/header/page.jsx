"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import heroImage from "@/public/images/wallpaperflare.com_wallpaper (2).jpg";

const Header = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <>
      <div>
        <Image src={heroImage} priority alt="hero-image" height="805px" />
      </div>
      <header className="fixed top-8 right-0 left-0 w-[90%] h-24 rounded-3xl py-5 px-10 mx-auto flex bg-blue justify-between items-center bg-black/50 backdrop-blur-[6px] text-brown-300">
        {/* logo & menu */}
        <nav className="flex items-center gap-x-9">
          {/* <Image src="/images/app-logo.png" width={56} height={53} alt="logo" /> */}
          <ul className="flex flex-row gap-x-9 child:text-gray-300 font-Dana  text-xl tracking-tightest child-hover:text-orange-400">
            <li>
              <Link
                href="/"
                className={currentPath === "/" ? "active-link" : null}
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={currentPath === "/menu" ? "active-link" : null}
              >
                منو
              </Link>
            </li>

            <li>
              <Link href="/blog">بلاگ</Link>
            </li>
            <li>
              <Link href="/aboutUs">درباره ما</Link>
            </li>
            <li>
              <Link href="address">تماس با ما</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-10">
          <div className="flex items-center gap-x-5 py-7">
            <div>
              <svg
                id="shopping-cart"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>

          {/* divider */}
          <span className="w-[1px] block h-14 bg-white/20"></span>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>

            <Link
              href={"/auth/login"}
              className="font-Dana text-xl tracking-tightest"
            >
              ورود | ثبت نام
            </Link>
          </div>
        </div>
        {/* Card & theme toggele  */}
        {/* <div>left section</div> */}
      </header>
    </>
  );
};

export default Header;
