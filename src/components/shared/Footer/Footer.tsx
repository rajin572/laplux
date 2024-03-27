import Container from "@/components/ui/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-zinc-900 text-white py-5 border-t-2 mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-items-center items-start">
          <div className="mb-5 lg:mb-0">
            <h1 className="text-xl font-bold mb-3">Trending Products</h1>
            <ul>
              <li className="mb-2">MacBook Air 13</li>
              <li className="mb-2">HP 15s-fq5317TU</li>
              <li className="mb-2">Dell Latitude 9430</li>
              <li className="mb-2">Acer Nitro V15 ANV15</li>
              <li className="mb-2">Samsung Book Odyssey</li>
              <li className="mb-2">Asus ROG Zephyrus G16</li>
            </ul>
          </div>
          <div className="mb-5 lg:mb-0">
            <h1 className="text-xl font-bold mb-3">Brands</h1>
            <ul>
              <li className="mb-2">Apple</li>
              <li className="mb-2">DELL</li>
              <li className="mb-2">HP</li>
              <li className="mb-2">ASUS</li>
              <li className="mb-2">Samsung</li>
              <li className="mb-2">Acer</li>
            </ul>
          </div>
          <div className="mb-5 lg:mb-0">
            <h1 className="text-xl font-bold mb-3">About US</h1>
            <p>
              At LapLux, we are passionate about providing you with
              top-of-the-line laptops that elevate your computing experience.
            </p>
          </div>
          <div className="mb-5 lg:mb-0">
            <h1 className="text-xl font-bold mb-3">Contact Us</h1>
            <ul>
              <li className="mb-2">Mirpur 11, Dhaka, Bangladesh</li>
              <li className="mb-2">
                Phone: <span className="font-bold">(123) 123-456</span>
              </li>
              <li className="mb-2">
                {" "}
                Email: <span className="font-bold">lapluz@gmail.com</span>
              </li>
              <li className="mb-2">
                <div className="flex justify-start items-center gap-5 my-5">
                  <Facebook className="text-white cursor-pointer" />
                  <Linkedin className="text-white cursor-pointer" />
                  <Instagram className="text-white cursor-pointer" />
                  <Twitter className="text-white cursor-pointer" />
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-5 lg:mb-0">
            <h1 className="text-xl font-bold mb-3">Customer Care</h1>
            <ul>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Returns & Refunds</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Cookie policy</li>
              <li className="mb-2">Payment Method</li>
            </ul>
          </div>
        </div>
        <hr className="w-10/12 mx-auto mt-20" />
        <div className="flex justify-center py-8 text-lg">
          © Copyright {currentYear} by Lapluz
        </div>
      </Container>
    </div>
  );
};

export default Footer;
