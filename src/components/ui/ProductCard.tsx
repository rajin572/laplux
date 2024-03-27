import { TLaptop } from "@/types";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ laptop }: { laptop: TLaptop }) => {
  const discountedPrice = laptop.price - laptop.price * (laptop.discount / 100);
  return (
    <Link href={`/laptops/${laptop?._id}`}>
      <div className="border-2 rounded-md w-[280px] bg-white overflow-hidden">
        <div className="relative bg-[#ffffff] p-5 w-[280px] h-[360px] border-b-2 rounded-t-md flex justify-center items-center group overflow-hidden">
          <Image
            src={laptop?.image}
            alt="product-image"
            width={0}
            height={0}
            sizes="100vw"
            className="group-hover:scale-110 transition-all duration-500 w-full h-[230px] "
          />
          <p className="absolute top-5 left-5 bg-[#3D3D3D] text-white text-xs py-1 px-3 rounded-xl">
            -{laptop?.discount}%
          </p>
        </div>
        <div className="p-2">
          <h2 className="text-left  mb-2">{laptop?.name}</h2>
          <div className="flex justify-between items-center text-sm">
            <div>
              <span className="text-2xl font-bold">৳</span>
              <del className="text-slate-600">{laptop?.price}</del>{" "}
              <span>
                <span className="text-2xl font-bold">৳</span>
                {discountedPrice}
              </span>
            </div>
            <CirclePlus className="font-light h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
