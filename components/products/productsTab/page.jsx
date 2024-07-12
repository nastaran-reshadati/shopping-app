import { getFetch } from "@/utils/fetch";
import React from "react";

const ProductsTab = async () => {
  const response = await getFetch("/products/products-tabs");
  const data = response.data;
  console.log(data);

  return <div>ProductsTab</div>;
};

export default ProductsTab;
