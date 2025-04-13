import React from "react";
import { SignUp } from "@clerk/nextjs";
const Page = () => {
  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      <SignUp />
    </div>
  );
};

export default Page;
