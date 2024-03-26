"use client";

import banner from "@/assets/images/banner.jpg";
import Container from "@/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import assets from "@/assets";
import SliderProductCard from "@/components/ui/SliderProductCard";

const Banner = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-screen mt-10 flex justify-center items-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <div className="flex justify-center items-center">
        <Container>
          <div className=" mx-auto  flex justify-center items-center text-center flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6">
              Shop Now for Cutting-Edge Technology and Elevate Your Computing
              Experience!
            </h2>
            <p className="text-white mb-10">
              Welcome to LapLux
              <br />
              Where Innovation Meets Excellence in Laptops!
            </p>
          </div>
          <div>
            <Swiper
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper mt-10 select-none"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <SliderProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderProductCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
