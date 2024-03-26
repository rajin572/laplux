import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const TrendingProducts = () => {
  return (
    <div className="w-full mt-20">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Trending Products</h2>
          </div>
          <Button variant={"outline"}>
            View All{" "}
            <ChevronRight className="font-light h-5 w-5 cursor-pointer" />
          </Button>
        </div>
        <p className=" mb-10">
          Explore our collection of trending products at LapLux, <br /> where
          innovation and technology converge to bring you the latest in laptop
          excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
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

export default TrendingProducts;
