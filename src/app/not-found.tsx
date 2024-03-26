import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center min-h-screen m-auto text-black bg-white">
      <h1 className="text-black text-6xl md:text-7xl lg:text-9xl font-extrabold mb-10">
        404
      </h1>
      <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold">
        OOPS! NOTHING WAS FOUND
      </h3>
      <p className="text-base lg:text-xl text-black">
        <span>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.{" "}
        </span>
        <Link
          href="/"
          className="text-black font-bold underline decoration-black"
        >
          Return to homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
