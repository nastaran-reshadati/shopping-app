"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import heroImage from "@/public/images/wallpaperflare.com_wallpaper (2).jpg";
import { useTheme } from "next-themes";

const Header = () => {
  const currentPath = usePathname();
  const { theme, setTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleTheme = () => {
    console.log(theme);

    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const slidesText = [
    {
      id: "0",
      title: "طعم به یادماندنی",
      body: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: "1",
      title: "لحظات ناب",
      body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها وتولید سادگی نامفهوم  لازم است",
    },
    {
      id: "2",
      title: "طعم لذیذ",
      body: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها  و مجله در ستون  که لازم است",
    },
  ];
  return (
    <div className="hero_area">
      <div className="relative">
        <Image src={heroImage} priority alt="hero-image" height="805px" />
      </div>
      <header className="fixed top-8 right-0 left-0 w-[90%] h-24 z-50 rounded-3xl py-5 px-10 mx-auto flex bg-blue justify-between items-center bg-black/50 backdrop-blur-[6px] text-brown-300">
        {/* logo & menu */}
        <nav className="flex items-center gap-x-9">
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
              className="font-Dana text-xl tracking-tightest"
            >
              ورود | ثبت نام
            </Link>
          </div>
        </div>
        {/* Card & theme toggele  */}
        {/* <div>left section</div> */}
      </header>
      <div
        id="default-carousel"
        className="absolute top-[11rem] right-36 container"
        data-carousel="slide"
      >
        <div className="duration-700 ease-in-out">
          <h1 className="font-MorabaBold text-4xl my-3 text-white dark:text-gray-50">
            {slidesText[currentIndex].title}
          </h1>
          <p className="font-MorabaLight text-xl w-[640px] text-right leading-9 text-white dark:text-gray-50">
            {slidesText[currentIndex].body}
          </p>
        </div>
        <div>
          <button className="rounded-3xl bg-orange-300 hover:bg-orange-400 font-Dana my-5 text-white  py-2 px-7">
            سفارش
          </button>
        </div>
        <div className="absolute top-60 right-0 carousel slide">
          <div className="container">
            <ol className="flex flex-row gap-x-2">
              {slidesText.map((_, index) => (
                <div
                  key={index}
                  className={
                    currentIndex === index
                      ? "cursor-pointer rounded-full w-3 h-3 opacity-75 bg-orange-500 active"
                      : "cursor-pointer rounded-full w-3 h-3 opacity-75 bg-white"
                  }
                  onClick={() => handleClick(index)}
                ></div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
