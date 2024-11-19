import { Outlet } from "react-router-dom";
import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer";

export const ShopLayout = function () {
  return (

      <div className="min-h-screen w-full flex flex-col justify-between">
        <Header />
        <div className="pt-24 w-full max-w-[1140px] mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
};
