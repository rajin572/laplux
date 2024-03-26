import { CirclePlus } from "lucide-react";
import Image from "next/image";

const SliderProductCard = () => {
  return (
    <div className="border-2 rounded-md w-[280px] bg-white overflow-hidden">
      <div className="relative bg-[#ffffff] p-5 w-[280px] h-[210px] border-b-2 rounded-t-md flex justify-center items-center group overflow-hidden">
        <Image
          src="https://i.ibb.co/d0d8ynX/Laptop5.png"
          alt="product-image"
          width={0}
          height={0}
          sizes="100vw"
          className="group-hover:scale-110 transition-all duration-500 w-[280px] h-auto"
        />
        <p className="absolute top-5 left-5 bg-[#3D3D3D] text-white text-xs py-1 px-3 rounded-xl">
          -14%
        </p>
      </div>
      <div className="p-2">
        <h2 className="text-left  mb-2">Double Bed & Side Tables</h2>
        <div className="flex justify-between items-center text-sm">
          <div>
            <del className="text-slate-600">$230.00</del> <span> $230.00</span>
          </div>
          <CirclePlus className="font-light h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SliderProductCard;
