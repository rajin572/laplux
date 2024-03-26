import React from "react";

interface ILaptopId {
  params: {
    laptopsId: string;
  };
}

const LaptopDetailPage = ({ params }: ILaptopId) => {
  return <div className="mt-16">Single Product {params.laptopsId}</div>;
};

export default LaptopDetailPage;
