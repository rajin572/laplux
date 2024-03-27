"use client";

import { useRouter } from "next/navigation";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  router.push("/dashboard/all-products");
  return (
    <div className="w-full">
      <h1>DashBoard</h1>
    </div>
  );
};

export default page;
