import Container from "@/components/ui/Container";
import FilterBox from "@/components/ui/FilterBox";
import ProductCard from "@/components/ui/ProductCard";

const AllLaptopPage = ({
  searchParams,
}: {
  searchParams: { brand: string };
}) => {
  let brand = "";
  console.log(searchParams);
  if (searchParams.brand) {
    brand = searchParams.brand;
  } else {
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
          <div className="col-span-2">
            <FilterBox />
          </div>
          <div className="col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-start">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllLaptopPage;
