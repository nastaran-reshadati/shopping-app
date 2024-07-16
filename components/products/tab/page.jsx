import { getFetch } from "@/utils/fetch";
import React from "react";
import Products from "../productsTab/page";

const Tab = async () => {
  const response = await getFetch("/products/products-tabs");
  const data = response.data;

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex justify-center items-center gap-4 ">
        <div className="indicator-menu"></div>
        <h3 className="font-MorabaBold text-3xl text-center">منو</h3>
        <div className="indicator-menu"></div>{" "}
      </div>
      <Products tabList={data?.tabList} tabPanel={data?.tabPanel} />
    </div>
  );
};

export default Tab;
