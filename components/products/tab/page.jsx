import React from "react";
import Products from "../productsTab/page";

const Tab = async () => {
  // const response = await getFetch("/products/products-tabs");
  const response = await fetch(
    "http://127.0.0.1:8000/api/products/products-tabs",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // تبدیل داده به فرمت JSON
  const data = await response.json();

  console.log("Response data:", data.data);

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex justify-center items-center gap-4 ">
        <div className="indicator-title"></div>
        <h3 className="font-MorabaBold text-3xl text-center">منو</h3>
        <div className="indicator-title"></div>{" "}
      </div>
      <Products tabList={data.data.tabList} tabPanel={data.data.tabPanel} />
    </div>
  );
};

export default Tab;
