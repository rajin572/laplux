import banner from "@/assets/images/banner.jpg";
import Container from "@/components/ui/Container";
import SliderProductCard from "@/components/ui/SliderProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Banner = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover min-h-screen py-20 mt-10 flex justify-center items-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <div className="flex justify-center items-center w-full">
        <Container>
          <div className=" mx-auto  flex justify-center items-center text-center flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6">
              Shop Now for Cutting-Edge Technology and Elevate Your Computing
              Experience!
            </h2>
            <p className="md:text-xl text-white mb-10">
              Welcome to LapLux
              <br />
              Where Innovation Meets Excellence in Laptops!
            </p>
          </div>
          <div>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <SliderProductCard />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <SliderProductCard />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <SliderProductCard />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <SliderProductCard />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <SliderProductCard />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <SliderProductCard />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <SliderProductCard />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
