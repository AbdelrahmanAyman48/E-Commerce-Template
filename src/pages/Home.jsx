import FlashSale from "../component/body/FlashSale";
import Hero from "../component/body/Hero";
import Categories from "../component/body/Categories";
import BestSelling from "../component/body/BestSelling";
import { ITEMS } from "../common/functions/items";
import Deal from "../component/body/Deal";
import Services from "../common/Services";
import Featured from "../component/body/Featured";
import AllProducts from "../component/body/AllProducts";

const Home = () => {
  return (
    <div dir="ltr" className="flex flex-col xl:mx-32 mt-28 gap-3">
      <Hero />
      <FlashSale />
      <Categories />
      <BestSelling items={ITEMS} />
      <Deal />
      <AllProducts items={ITEMS} />
      <Featured />
      <Services /> 
    </div>
  );
};

export default Home;
