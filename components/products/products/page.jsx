"use client";
import React from "react";

const Products = ({ tabPanel }) => {
  console.log(tabPanel);
  return <div className="bg-green-500 mx-4">{tabPanel.name}</div>;
};

export default Products;
