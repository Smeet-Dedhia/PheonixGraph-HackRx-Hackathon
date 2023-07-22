export function Table() {
  return (
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
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-black whitespace-nowrap "
            >
              Apple Smart Watches
            </th>
            <td className="px-6 py-4">45%</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">Rs. 150000</td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-black whitespace-nowrap"
            >
              Apple IPads
            </th>
            <td className="px-6 py-4">35%</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">Rs. 75000</td>
          </tr>
          <tr className="bg-white ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-black whitespace-nowrap "
            >
              Airpods
            </th>
            <td className="px-6 py-4">15%</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">Rs. 25000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
