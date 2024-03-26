import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import React from "react";

const FlashSalePage = () => {
  return (
    <div className="mt-16 py-10">
      <Container>
        <div className="flex justify-start items-center mb-10">
          <div className="text-2xl font-bold flex justify-center items-center gap-4">
            <h2>End Time: </h2>
            <p className="p-2 bg-red-300 rounded">30D</p>
            <p className="p-2 bg-red-300 rounded">23H</p>
            <p className="p-2 bg-red-300 rounded">59M</p>
            <p className="p-2 bg-red-300 rounded">59S</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-5">Flash Sale Page</h1>
        <p className="text-slate-700 mb-14">
          Attention, tech enthusiasts! Do not miss out on our electrifying Flash
          Sale at LapLux! For a limited time only, dive into a whirlwind of
          unbeatable deals on the latest laptops that will leave you in awe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
};

export default FlashSalePage;