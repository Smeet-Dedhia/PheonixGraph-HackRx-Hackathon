// import Card from "../components/app/Card";
import Header from "../components/app/Header";
import Slider from "../components/app/Slider";

const BajajApp = () => {
  return (
    <div className="max-w-md mx-auto h-screen bg-[#E3E7F5]">
      <div className="flex flex-col justify-center">
        <Header />
        <Slider />
      </div>
    </div>
  );
};

export default BajajApp;
