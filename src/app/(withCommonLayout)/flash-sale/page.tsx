import Container from "@/components/ui/Container";
import CountdownTimer from "@/components/ui/CountDownTimer";
import ProductCard from "@/components/ui/ProductCard";
import { TLaptop } from "@/types";
import React from "react";

const FlashSalePage = async () => {
  const res = await fetch("https://laplux-server.vercel.app/api/v1/laptop", {
    cache: "no-store",
  });

  const laptopData = await res.json();

  const flashSaleLaptops = laptopData.data.filter(
    (laptop: TLaptop) => laptop.flashSale
  );

  return (
    <div className="mt-16 py-10">
      <Container>
        <div className="flex justify-start items-center mb-10">
          <CountdownTimer />
        </div>
        <h1 className="text-3xl font-bold mb-5">Flash Sale Page</h1>
        <p className="text-slate-700 mb-14">
          Attention, tech enthusiasts! Do not miss out on our electrifying Flash
          Sale at LapLux! For a limited time only, dive into a whirlwind of
          unbeatable deals on the latest laptops that will leave you in awe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          {flashSaleLaptops.map((laptop: TLaptop) => (
            <ProductCard key={laptop?._id} laptop={laptop} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FlashSalePage;
