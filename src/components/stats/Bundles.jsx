import cover from "../../assets/products/cover.png";
import iphone from "../../assets/products/iphone.png";
import charger from "../../assets/products/charger.png";
import airpods from "../../assets/products/airpods.png";

const products = [
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
    <div className="flex flex-col bg-white max-w-2xl px-2 py-4 rounded-lg ">
      <div className="flex gap-12 ml-4">
        <div>
          <h2 className="text-md font-medium">Popular Bundles</h2>
          <p className="text-sm text-gray-500">Summary</p>
        </div>

        {/* <p className="text-sm">Category</p> */}
      </div>

      <div className="flex justify-around py-4">
        {products.map((product, id) => (
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
