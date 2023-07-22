// import Card from "../components/app/Card";
import Header from "../components/app/Header";

import RecommendedProducts from "../components/app/RecommendedProducts";
import Slider from "../components/app/Slider";
import RecentPurchase2 from "../components/app/user/RecentPurchase2";

const User2 = () => {
  return (
    <div className="max-w-md mx-auto h-content bg-[#E3E7F5] text-black">
      <div className="flex flex-col justify-center">
        <Header />
        <Slider />
        <RecentPurchase2 />
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default User2;
