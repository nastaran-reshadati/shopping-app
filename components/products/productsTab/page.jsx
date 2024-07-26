"use client";
import { getBlurImg, numberFormat } from "@/utils/helper";
import Image from "next/image";
import React, { useState } from "react";

const Products = ({ tabList, tabPanel }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div>
        <ul className="flex justify-around w-[38rem] mx-auto child:font-DanaMedium ">
          {tabList?.map((tab, index) => (
            <li
              className={`cursor-pointer  px-5 py-2 ${
                active === index && "bg-orange-400 rounded-full"
              }`}
              key={index}
              onClick={() => setActive(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* tab panel */}
      <div className="container mx-auto my-8">
        {tabPanel?.map(
          (tabs, tabIndex) =>
            active === tabIndex && (
              <div
                key={tabIndex}
                className="[&>*]:font-Dana font-normal grid grid-cols-1 md:grid-cols-3 rounded-3xl mx-auto"
              >
                {tabs?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between max-w-sm p-6  bg-white border border-gray-200  space-y-4  rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <div className="relative">
                      <Image
                        src={item.primary_image}
                        className="rounded-br-2xl rounded-bl-3xl rounded-xl hover:scale-105 transition-transform"
                        width="100"
                        height="65"
                        sizes="100vw"
                        style={{ width: "100%" }}
                        alt="product-image"
                        placeholder={getBlurImg()}
                      />
                      {item.is_sale && (
                        <h4 className=" absolute top-6 left-5 transform rotate-[339deg] text-red-700 text-4xl font-bold">
                          {Math.round(
                            100 - (item.sale_price / item.price) * 100
                          )}
                          %-
                        </h4>
                      )}
                    </div>
                    <h4 className="text-2xl tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="font-Dana text-gray-700 dark:text-gray-400">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-x-3">
                        {item.is_sale ? (
                          <>
                            <del>{item.price}</del>
                            <h5 className="text-xl">
                              {numberFormat(item.sale_price)}
                            </h5>
                          </>
                        ) : (
                          <h5 className="text-xl">
                            {numberFormat(item.price)}
                          </h5>
                        )}
                      </div>
                      <div className="bg-orange-400 p-3 rounded-full cursor-pointer">
                        <svg className="size-6 w-7 h-7" stroke="currentColor">
                          <use href="/icons.svg#shopping-cart2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Products;
