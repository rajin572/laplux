import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { TLaptop } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptop", {
    next: {
      revalidate: 30,
    },
  });

  const laptopData = await res.json();

  const flashSaleLaptops = laptopData.data.filter(
    (laptop: TLaptop) => laptop.flashSale
  );

  const sortedFlashSaleLaptops = flashSaleLaptops.sort(
    (a: TLaptop, b: TLaptop) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="w-full mt-20">
      <Container>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <Link href="/flash-sale">
            <Button className="bg-zinc-900 hover:bg-white text-white hover:text-black border-2 border-zinc-900 transition-all duration-500">
              View All{" "}
              <ChevronRight className="font-light h-5 w-5 cursor-pointer" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          {sortedFlashSaleLaptops.slice(0, 6).map((laptop: TLaptop) => (
            <ProductCard key={laptop?._id} laptop={laptop} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
