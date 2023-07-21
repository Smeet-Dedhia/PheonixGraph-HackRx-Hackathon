// import Card from "../components/app/Card";
import Header from "../components/app/Header";
import RecentPurchase from "../components/app/RecentPurchase";
import RecommendedProducts from "../components/app/RecommendedProducts";
import Slider from "../components/app/Slider";

const BajajApp = () => {
  return (
    <div className="max-w-md mx-auto h-content bg-[#E3E7F5]">
      <div className="flex flex-col justify-center">
        <Header />
        <Slider />
        <RecentPurchase />
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default BajajApp;
