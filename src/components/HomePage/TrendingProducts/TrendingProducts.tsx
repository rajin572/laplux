import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { TLaptop } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const TrendingProducts = async () => {
  const res = await fetch("https://laplux-server.vercel.app/api/v1/laptop", {
    next: {
      revalidate: 30,
    },
  });

  const laptopData = await res.json();

  const sortedLaptopData = laptopData?.data
    ?.slice()
    .sort(
      (b: { rating: number }, a: { rating: number }) => a.rating - b.rating
    );

  return (
    <div className="w-full mt-20">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Trending Products</h2>
          </div>
          <Link href="/laptops">
            {" "}
            <Button className="bg-zinc-900 hover:bg-white text-white hover:text-black border-2 border-zinc-900 transition-all duration-500">
              View All{" "}
              <ChevronRight className="font-light h-5 w-5 cursor-pointer" />
            </Button>
          </Link>
        </div>
        <p className="mb-10">
          Explore our collection of trending products at LapLux, <br /> where
          innovation and technology converge to bring you the latest in laptop
          excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          {sortedLaptopData.slice(0, 6).map((laptop: TLaptop) => (
            <ProductCard key={laptop?._id} laptop={laptop} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrendingProducts;
