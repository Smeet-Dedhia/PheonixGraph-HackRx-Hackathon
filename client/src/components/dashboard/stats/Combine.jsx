import { useState } from "react";
import { Chart } from "react-google-charts";

export const options = {
  chart: {
    title: "Sales",
    subtitle: "in millions of dollars (USD)",
  },
};

const Combine = () => {
  const topProducts = [
    {
      id: 1,
      title: "MacBookPro17",
      popularity: 45,
      category: "Laptop",
      price: 120000,
      data: [
        ["Day", "MacBook Pro 17"],
        [1, 37.8],
        [2, 30.9],
        [3, 25.4],
        [4, 11.7],
        [5, 11.9],
        [6, 8.8],
        [7, 7.6],
        [8, 12.3],
        [9, 16.9],
        [10, 12.8],
        [11, 5.3],
        [12, 6.6],
        [13, 4.8],
        [14, 4.2],
      ],
    },
    {
      id: 2,
      title: "TTChair",
      popularity: 60,
      category: "Furniture",
      price: 75000,
      data: [
        ["Day", "TT Chair"],
        [1, 80.8],
        [2, 69.5],
        [3, 57],
        [4, 18.8],
        [5, 17.6],
        [6, 13.6],
        [7, 12.3],
        [8, 29.2],
        [9, 42.9],
        [10, 30.9],
        [11, 7.9],
        [12, 8.4],
        [13, 6.3],
        [14, 6.2],
      ],
    },
    {
      id: 3,
      title: "MacBookPro18",
      popularity: 45,
      category: "Laptop",
      price: 120000,
      data: [
        ["Day", "Airpods"],
        [1, 41.8],
        [2, 32.4],
        [3, 25.7],
        [4, 10.5],
        [5, 10.4],
        [6, 7.7],
        [7, 9.6],
        [8, 10.6],
        [9, 14.8],
        [10, 11.6],
        [11, 4.7],
        [12, 5.2],
        [13, 3.6],
        [14, 3.4],
      ],
    },
  ];

  const [product, setProduct] = useState("MacbookPro17");

  return (
    <div>
      <section className="text-[#F1CEAE]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
          <div className="relative px-6 text-lg  py-3 font-semibold   ">
            Top Products
          </div>
          <table className="w-full text-sm text-left text-black  bg-white">
            <thead className="text-xs text-gray-700 uppercase bg-white">
              <tr className="bg-white">
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Popularity
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((item) => (
                <tr
                  className="bg-white border-b  hover:bg-gray-200"
                  key={item.id}
                  onClick={() => setProduct(topProducts.id)}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap "
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.popularity}%</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">Rs. {item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {topProducts.map(
            (item) =>
              product === item.title && (
                // <div
                //   key={item.id}
                //   className="flex flex-col lg:flex-row   mt-4 md:mt-6"
                // >
                //   {item.title}
                // </div>
                <Chart
                  key={item.id}
                  chartType="Line"
                  width="120%"
                  height="220px"
                  data={data}
                  options={options}
                  // className=""
                />
              )
          )}
        </div>

        {/* <div className="mx-auto max-w-screen-xl px-4 py-10 md:py-20  leading-10 ">
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-center lg:text-left mb-10">
            Tracks
          </h1>
          <div className="flex flex-wrap mt-4 md:mt-6 lg:mt-8 ">
            {topProducts.map((item) => (
              <button
                key={item.id}
                className={`rounded-md text-white p-2 px-5 m-2 md:m-4 lg:m-7 text-base md:text-xl font-medium ${
                  product === topProducts.title ? "bg-[#F1CEAE]" : ""
                }`}
                id={`${item.title.toLowerCase()}-button`}
                onClick={() => setProduct(topProducts.title)}
              >
                {topProducts.title}
              </button>
            ))}
          </div>
          {topProducts.map(
            (item) =>
              product === item.title && (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row   mt-4 md:mt-6"
                >
                  <div
                    className={`rounded-md my-4 md:my-6 ${
                      product === "Macbook Pro 17"
                        ? "h-20 md:h-24"
                        : "h-10 md:h-12"
                    }`}
                  ></div>
                </div>
              )
          )}
        </div> */}
      </section>
    </div>
  );
};

export default Combine;
