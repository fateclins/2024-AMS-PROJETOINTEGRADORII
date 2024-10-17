import React from "react";
import { Helmet } from "react-helmet-async";

import { Footer } from "@/components/footer/index.tsx";
import { Header } from "@/components/header/index.tsx";

import { Bestseller } from "./components/bestseller";
import { Categories } from "./components/categories";
import { Testimonies } from "./components/testimonies";
import { createAddressesController, selectAddressesController } from "@/api/shop/addresses";

export const Home = async function () {
  const test = selectAddressesController("J");

  console.log(test);

  return (
    <>
      <Helmet title="Principal" />
      <div className="flex h-full w-full flex-col items-center">
        <Header />
        <Categories />
        <Bestseller />
        <Testimonies />
        <Footer />
      </div>
    </>
  );
};
