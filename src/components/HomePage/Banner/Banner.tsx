import banner from "@/assets/images/banner.jpg";
import Container from "@/components/ui/Container";
import ImageSlider from "@/components/ui/ImageSlider";

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
              Welcome to LapLux
              <br />
              Where Innovation Meets Excellence in Laptops!
            </h2>
            <p className="md:text-xl text-white mb-10">
              Shop Now for Cutting-Edge Technology and Elevate Your Computing
              Experience!
            </p>
          </div>
          <div>
            <ImageSlider />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
