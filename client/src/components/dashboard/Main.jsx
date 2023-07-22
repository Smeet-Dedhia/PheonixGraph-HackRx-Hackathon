import Header from "./Header";
import { ChartComp } from "../dashboard/stats/Chart";
// import Bundles from "../dashboard/stats/Bundles";
import { Line } from "../dashboard/stats/Line";
import { Table } from "../dashboard/stats/Table";
import New from "./stats/New";
import Combine from "./stats/Combine";

const Main = () => {
  return (
    <div className=" w-5/6">
      <Header />

      <section className="flex justify-center gap-4  my-4 mx-0">
        <div>
          {/* <Bundles /> */}
          <New />
        </div>
        <div>
          <ChartComp />
        </div>
      </section>
      <br></br>
      <section className="flex justify-center gap-4  my-4 mx-0">
        <div>
          <Table />
        </div>
        <div>
          <Line />
        </div>
        {/* <Combine /> */}
      </section>
    </div>
  );
};

export default Main;
