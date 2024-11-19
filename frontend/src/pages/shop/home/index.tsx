import { Bestseller } from "./components/bestseller";
import { Categories } from "./components/categories";

export function Home () {
  return (
    <div className="flex pb-16 flex-col items-center">
      <Categories />
      <Bestseller />
    </div>
  );
};
