"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const currentPath = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    console.log(theme);

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* desktop */}
      <section className="fixed top-8 right-0 left-0 w-[95%] lg:w-[90%] h-24 z-50 rounded-3xl py-5 px-10 mx-auto hidden md:flex bg-blue justify-between items-center bg-black/50 backdrop-blur-[6px] text-brown-300">
        {/* logo & menu */}
        <nav className="flex items-center gap-x-9">
          <ul className="flex flex-row gap-x-6 lg:gap-x-9 child:text-gray-300 font-Dana text-lg lg:text-xl tracking-tightest child-hover:text-orange-400">
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
        <div className="flex gap-x-5 lg:gap-x-10 items-center">
          <div className="flex items-center gap-x-4 py-7">
            <div>
              <svg className="svg-icon" stroke="currentColor">
                <use href="/icons.svg#shopping-bag" />
              </svg>
            </div>
            <div onClick={toggleTheme}>
              {theme === "light" ? (
                <svg className="svg-icon" stroke="currentColor">
                  <use href="/icons.svg#moon" />
                </svg>
              ) : (
                <svg className="svg-icon" stroke="currentColor">
                  <use href="/icons.svg#sun" />
                </svg>
              )}
            </div>
          </div>

          {/* divider */}
          <span className="w-[1px] block h-14 bg-white/20"></span>
          <div className="flex items-center gap-3">
            <svg className="svg-icon" stroke="currentColor">
              <use href="/icons.svg#login" />
            </svg>

            <Link
              href={"/auth/login"}
              className="hidden lg:inline-block font-Dana text-xl tracking-tightest"
            >
              ورود | ثبت نام
            </Link>
          </div>
        </div>
        {/* Card & theme toggele  */}
        {/* <div>left section</div> */}
      </section>

      {/* Mobile  Navbar   */}
      <section>
        <div
          className="fixed z-20
         top-0 right-0 w-full flex md:hidden text-white bg-black/20 dark:bg-black/20 backdrop-blur-[6px]"
        >
          <div className="flex w-full  items-center justify-between h-16 px-5">
            <svg
              onClick={toggleMenu}
              className="svg-icon"
              stroke="currentColor"
            >
              <use href="/icons.svg#bars-3" />
            </svg>
            <svg>
              <use href="/icons.svg#shop" />
            </svg>
            <svg className="svg-icon" stroke="currentColor">
              <use href="/icons.svg#shopping-bag" />
            </svg>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "fixed translate-x-0" : "hidden translate-x-full"
          } md:hidden transition-all w-64 min-h-screen pr-7 pl-4 pt-5 top-0 bottom-0 right-0 bg-white dark:bg-zinc-700 z-50`}
        >
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg stroke="currentColor" className="w-5 h-5">
              <use href="/icons.svg#x-mark" />
            </svg>
          </div>

          <ul className="flex flex-col justify-between gap-y-6 pb-8 mt-5 border-b border-b-gray-300/50  dark:border-b-white/10 lg:gap-x-9 text-zinc-600 dark:text-white font-Dana  tracking-tightest child-hover:text-orange-400">
            <li
              className={`${
                currentPath === "/" && "active-responsive-link"
              } flex gap-x-2 pr-2 py-[9px]`}
            >
              <svg stroke="currentColor" className="w-5 h-5">
                <use href="/icons.svg#home" />
              </svg>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li
              className={`${
                currentPath === "/menu" && "active-responsive-link"
              } flex gap-x-2 pr-2 py-[9px]`}
            >
              <svg stroke="currentColor" className="w-5 h-5">
                <use href="/icons.svg#bell-alert" />
              </svg>
              <Link
                href="/menu"
                className={currentPath === "/menu" ? "active-link" : null}
              >
                منو
              </Link>
            </li>

            <li
              className={`${
                currentPath === "/blog" && "active-responsive-link"
              } flex gap-x-2 pr-2 py-[9px]`}
            >
              <svg stroke="currentColor" className="w-5 h-5">
                <use href="/icons.svg#document" />
              </svg>
              <Link href="/blog">بلاگ</Link>
            </li>
            <li
              className={`${
                currentPath === "/aboutUs" && "active-responsive-link"
              } flex gap-x-2 pr-2 py-[9px]`}
            >
              <svg stroke="currentColor" className="w-5 h-5">
                <use href="/icons.svg#building-office" />
              </svg>
              <Link href="/aboutUs">درباره ما</Link>
            </li>
            <li
              className={`${
                currentPath === "/call" && "active-responsive-link"
              } flex gap-x-2 pr-2 py-[9px]`}
            >
              <svg stroke="currentColor" className="w-5 h-5">
                <use href="/icons.svg#phone-arrow-down-left" />
              </svg>
              <Link href="address">تماس با ما</Link>
            </li>
          </ul>

          <div className="font-Dana space-y-4 pt-8 child:cursor-pointer child:text-orange-300">
            <div className="inline-flex items-center gap-3">
              <svg stroke="currentColor" className="w-5 h-5">
                <use href="/icons.svg#login" />
              </svg>

              <Link href={"/auth/login"} className="tracking-tightest">
                ورود | ثبت نام
              </Link>
            </div>
            <div className="flex items-center gap-x-2" onClick={toggleTheme}>
              {theme === "light" ? (
                <svg stroke="currentColor" className="w-5 h-5">
                  <use href="/icons.svg#moon" />
                </svg>
              ) : (
                <svg stroke="currentColor" className="w-5 h-5">
                  <use href="/icons.svg#sun" />
                </svg>
              )}
              <span className="tracking-tightest">
                {theme === "light" ? "تیره" : "روشن"}
              </span>
            </div>

            <div className="inline-flex items-center gap-3">
              {" "}
              <svg stroke="currentColor" className="w-5 h-5">
                <use href="/icons.svg#shopping-bag" />
              </svg>
              <span className="tracking-tightest">سبد خرید</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
