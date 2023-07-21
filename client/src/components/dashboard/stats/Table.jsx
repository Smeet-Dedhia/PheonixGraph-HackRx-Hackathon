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
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">45%</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-black whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">35%</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-black whitespace-nowrap "
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">15%</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
