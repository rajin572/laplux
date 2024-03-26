import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import React from "react";

const FlashSale = () => {
  return (
    <div className="w-full mt-20">
      <Container>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <Button variant={"outline"}>View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-start">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
