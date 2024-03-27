import Container from "@/components/ui/Container";
import FilterBox from "@/components/ui/FilterBox";
import ProductCard from "@/components/ui/ProductCard";
import { TLaptop } from "@/types";

const AllLaptopPage = async ({
  searchParams,
}: {
  searchParams: { brand: string };
}) => {
  let brand = "";
  let data = [];

  if (searchParams.brand) {
    brand = searchParams.brand;
    const res = await fetch(
      `https://laplux-server.vercel.app/api/v1/laptop/brand/${brand}`,
      {
        cache: "no-store",
      }
    );
    data = await res.json();
  } else {
    const res = await fetch("https://laplux-server.vercel.app/api/v1/laptop", {
      cache: "no-store",
    });
    data = await res.json();
    brand = "All";
  }

  return (
    <div className="mt-32">
      <Container>
        <h1 className="text-2xl font-bold mb-4">
          Our Collection Of {brand} Laptops
        </h1>
        <p className=" mb-14">
          Embark on a journey of limitless possibilities with LapLux expansive
          collection of laptops, meticulously curated to cater to every need and
          preference.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-5">
          <div className="lg:col-span-2">
            <FilterBox />
          </div>
          <div className="lg:col-span-10">
            {data?.data?.length === 0 ? (
              <h1 className="text-2xl font-bold text-center">
                No Laptop Found For {brand}
              </h1>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-start">
                {data?.data?.map((laptop: TLaptop) => (
                  <ProductCard key={laptop?._id} laptop={laptop} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllLaptopPage;
