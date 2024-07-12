import { getFetch } from "@/utils/fetch";
import React from "react";
import Products from "../products/page";
import Image from "next/image";

const Tab = async () => {
  const response = await getFetch("/products/products-tabs");
  const data = response.data;
  console.log("tabpanel", data?.tabPanel);
  return (
    <div className="my-11">
      <div className="flex justify-center items-center gap-4 ">
        <div className="w-3 h-1 bg-orange-500 "></div>
        <h3 className="font-MorabaBold text-3xl text-center">منو</h3>
        <div className="w-3 h-1 bg-orange-500"></div>{" "}
      </div>
      <div>
        <ul className="child:font-DanaMedium w-[38rem] mx-auto flex justify-around ">
          {data?.tabList?.map((tab, index) => (
            <li key={index}>{tab}</li>
          ))}
        </ul>
      </div>
      {/* tab panel */}

      <div className="container mx-auto my-8">
        {data?.tabPanel?.map((tabs, index) => (
          <div
            key={index}
            className="[&>*]:font-DanaMedium flex mx-auto gap-6  rounded-3xl"
          >
            {tabs?.map((item, index) => (
              <div key={item.id} className="flex rounded-3xl">
                <a
                  href="#"
                  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="bg-slate-200">
                    <Image
                      width={0}
                      height={0}
                      src={item.primary_image}
                      sizes="100vw"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p class="font-Dana text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </a>{" "}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
