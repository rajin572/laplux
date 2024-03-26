import Container from "@/components/ui/Container";
import { Rating } from "@smastrom/react-rating";
import { Clock, Heart, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ILaptopId {
  params: {
    laptopsId: string;
  };
}

const LaptopDetailPage = ({ params }: ILaptopId) => {
  return (
    <div className="mt-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start ">
          <div className="w-full h-[350px] sm:h-[500px] border-2 flex justify-center items-center">
            <Image
              src="https://i.ibb.co/d0d8ynX/Laptop5.png"
              alt="product-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[90%] h-[90%]"
            />
          </div>
          <div>
            <div>
              <div className="pb-5 border-b-2 border-b-zinc-900 mb-10">
                <div className="flex justify-between items-center gap-2  mb-3">
                  <h1 className="text-2xl font-bold">
                    Double Bed & Side Tables
                  </h1>
                  <Heart className="text-red-400 cursor-pointer hover:text-red-500" />
                </div>
                <div className="flex items-center gap-5">
                  <p className=" text-xl pe-10 border-e-2 border-e-zinc-900">
                    <span className="text-2xl">৳ </span>250
                  </p>
                  <Rating style={{ maxWidth: 100 }} value={2} readOnly />
                </div>
              </div>
            </div>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem
              ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magn.{" "}
            </p>
            <ul className="px-5 mt-5">
              <li className="list-disc">Lorem ipsum dolor sit amet, </li>
              <li className="list-disc">Lorem ipsum dolor sit amet, </li>
              <li className="list-disc">Lorem ipsum dolor sit amet, </li>
              <li className="list-disc">Lorem ipsum dolor sit amet, </li>
            </ul>
            <div className="mt-10">
              <p className="mb-2 flex items-center gap-2">
                <Truck /> Free worldwide shipping on all orders over $100
              </p>
              <p className=" flex items-center gap-2">
                <Clock /> Delivers in: 3-7 Working Days Shipping & Return
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-5">Description</h3>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum
            dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magn.{" "}
          </p>
          <ul className="px-5 mt-5">
            <li className="list-disc">Lorem ipsum dolor sit amet, </li>
            <li className="list-disc">Lorem ipsum dolor sit amet, </li>
            <li className="list-disc">Lorem ipsum dolor sit amet, </li>
            <li className="list-disc">Lorem ipsum dolor sit amet, </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default LaptopDetailPage;
