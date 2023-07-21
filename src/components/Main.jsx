import { ChartComp } from "./stats/Chart";
import Header from "./Header";
import Bundles from "./stats/Bundles";

const Main = () => {
  return (
    <div className=" w-5/6">
      <Header />

      <section className="flex justify-center gap-4  my-4 mx-0">
        <div>
          <Bundles />
        </div>
        <div>
          <ChartComp />
        </div>
      </section>
    </div>
  );
};

export default Main;
