"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroImage from "@/public/images/wallpaperflare.com_wallpaper (2).jpg";
import { slidesText } from "@/constant/sliderText";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero_area">
      <div className="relative h-full">
        <Image
          className="h-full object-cover w-full"
          src={heroImage}
          priority
          alt="hero-image"
          height="805px"
        />
      </div>
      {/* Hero Section */}
      <div
        id="default-carousel"
        className="container absolute top-[10rem] right-0 px-8 mx-auto  overflow-hidden"
        data-carousel="slide"
      >
        <div className="duration-700 ease-in-out">
          <h1 className="font-MorabaBold text-lg md:text-2xl lg:text-4xl my-3 text-white dark:text-gray-50">
            {slidesText[currentIndex].title}
          </h1>
          <p className="hidden md:flex font-MorabaLight text-xl w-[640px] text-right leading-9 text-white dark:text-gray-50">
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

export default Hero;
