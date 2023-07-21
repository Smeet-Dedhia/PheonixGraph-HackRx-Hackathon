import { ChartComp } from "./stats/Chart";
import Header from "./Header";
import Bundles from "./stats/Bundles";

const Main = () => {
  return (
    <div className=" w-5/6">
      <Header />

      <section className="m-4">
        <Bundles />
        <ChartComp />
      </section>
    </div>
  );
};

export default Main;
