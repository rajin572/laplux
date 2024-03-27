import { Checkbox } from "./checkbox";

const FilterBox = () => {
  return (
    <div>
      {/* Price range */}
      <div className="border-2 p-5 mb-10">
        <h1 className="p-2 border-s-4 border-zinc-900 mb-4 text-xl">
          Price Range
        </h1>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            20,000 - 50,000
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            50,000 - 1,00,000
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            1,00,000 - 1,25,000
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            1,25,000 - 1,50,000
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            1,50,000 - 2,00,000
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            2,00,000 - 9,99,999
          </label>
        </div>
      </div>
      {/* Category */}
      <div className="border-2 p-5 mb-10">
        <h1 className="p-2 border-s-4 border-zinc-900 mb-4 text-xl">Brands</h1>
        <p className="mb-2 font-bold cursor-pointer">Apple</p>
        <p className="mb-2 font-bold cursor-pointer">Dell</p>
        <p className="mb-2 font-bold cursor-pointer">HP</p>
        <p className="mb-2 font-bold cursor-pointer">ASUS</p>
        <p className="mb-2 font-bold cursor-pointer">Samsung</p>
        <p className="mb-2 font-bold cursor-pointer">Acer</p>
      </div>
      {/* Rating */}
      <div className="border-2 p-5  mb-10">
        <h1 className="p-2 border-s-4 border-zinc-900 mb-4 text-xl">Ratings</h1>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            1 Star
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            2 star
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            3 star
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            4 star
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            5 star
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
