import { ChartComp } from "./stats/Chart";
import Header from "./Header";
import Bundles from "./stats/Bundles";
import { Line } from "./stats/Line";
import { Table } from "./stats/Table";
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
      <br>
      </br>
      <section className="flex justify-center gap-4  my-4 mx-0">
        <div>
          <Line />
        </div>
        <div>
          <Table />
        </div>
      </section>
    </div>
  );
};

export default Main;
