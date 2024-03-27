import SliderProductCard from "@/components/ui/SliderProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TLaptop } from "@/types";

const ImageSlider = async () => {
  const res = await fetch("https://laplux-server.vercel.app/api/v1/laptop", {
    next: {
      revalidate: 30,
    },
  });
  const laptopData = await res.json();
  const sortedLaptopsByCreateAT = laptopData?.data?.sort(
    (a: TLaptop, b: TLaptop) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {sortedLaptopsByCreateAT.slice(0, 10).map((laptop: TLaptop) => (
          <CarouselItem key={laptop._id} className="md:basis-1/2 lg:basis-1/3">
            <SliderProductCard laptop={laptop} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSlider;
