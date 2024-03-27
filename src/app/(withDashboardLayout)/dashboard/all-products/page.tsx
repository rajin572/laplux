import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TLaptop } from "@/types";

const DashboardAllProduct = async () => {
  const res = await fetch(`https://laplux-server.vercel.app/api/v1/laptop`, {
    cache: "no-store",
  });

  const laptops = await res.json();

  const discountedPriceGenerator = (price: number, discount: number) => {
    const discountedPrice = price - price * (discount / 100);
    return discountedPrice;
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Discounted Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {laptops?.data?.map((laptop: TLaptop, i: number) => (
            <TableRow key={laptop?._id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{laptop?.name}</TableCell>
              <TableCell>{laptop?.brand}</TableCell>
              <TableCell>{laptop?.price}</TableCell>
              <TableCell>{laptop?.discount}</TableCell>
              <TableCell>
                {discountedPriceGenerator(laptop?.price, laptop?.discount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardAllProduct;
