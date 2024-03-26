import Banner from "@/components/HomePage/Banner/Banner";
import FlashSale from "@/components/HomePage/FlashSale/FlashSale";
import TrendingProducts from "@/components/HomePage/TrendingProducts/TrendingProducts";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <TrendingProducts />
    </div>
  );
};

export default page;
