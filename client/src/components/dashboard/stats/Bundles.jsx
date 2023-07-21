import cover from "../../../assets/products/cover.png";
import iphone from "../../../assets/products/iphone.png";
import charger from "../../../assets/products/charger.png";
import airpods from "../../../assets/products/airpods.png";

const best_bundles = [
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
];

const books = [
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
];

const music = [
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
];

const DVD = [
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
];

const video = [
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
  {
    label: "Phone Case",
    img: cover,
  },
  {
    label: "iPhone 11",
    img: iphone,
  },
  {
    label: "Charger",
    img: charger,
  },
  {
    label: "Airpods Pro",
    img: airpods,
  },
];



const Bundles = () => {
  return (
    <div className="flex flex-col justify-center bg-white max-w-3xl px-2 py-4 rounded-lg ">
      <div className="flex gap-12 ml-4">
        <div>
          <h2 className="text-md font-medium">Popular Bundles</h2>
          <p className="text-sm text-gray-500">Summary</p>
        </div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
        </div>
        {/* <p className="text-sm">Category</p> */}
      </div>

      <div className="flex gap-4 py-4 px-2">
        {best_bundles.map((product, id) => (
          <div
            key={id}
            className="bg-[#E2EBFC] flex flex-col items-center gap-2 justify-center h-28 w-28 rounded-lg"
          >
            <img src={product.img} alt="hello" className="h-16" />
            <p className="text-xs font-semibold">{product.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bundles;
