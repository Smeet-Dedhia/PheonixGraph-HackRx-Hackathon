import { Link, useParams } from "react-router-dom";
import { recommended } from "../../data/recommended";
import logo from "../../assets/app.png";
import { AiFillStar } from "react-icons/ai";

const ProductDetailsR2 = () => {
  const params = useParams();
  const { id } = params;

  const reqP = recommended.filter((product) => product.id == id);
  console.log(reqP);

  return (
    <div className="max-w-md mx-auto h-content border-x border-gray-300">
      <header className="flex justify-center items-center p-3 bg-[#022a52] mb-8">
        <Link to="/app">
          <img src={logo} alt="" />{" "}
        </Link>
      </header>

      {/* product-details  */}
      <div className="flex flex-col items-center gap-4 mt-20">
        <img src={reqP[0].pic} alt="" className="px-4" />
        <div className="flex items-center gap-4 ">
          <h2 className="text-2xl font-semibold">{reqP[0].title}</h2>
          <p className="bg-green-200 w-10 flex text-green-600  items-center justify-center py-0.5 border border-green-600 rounded">
            <AiFillStar className="text-green-500" />
            {reqP[0].rating}
          </p>
        </div>
      </div>

      {/* recommendations  */}
      <h2 className="my-12 text-2xl font-semibold mx-6">Similar Products</h2>
      <div className="grid grid-cols-3">
        {reqP[0].recommended.map((rec) => (
          <div
            key={rec.id}
            className="flex flex-col justify-around items-center text-sm font-semibold py-6 h-54 gap border border-zinc-300 "
          >
            <img src={rec.pic} alt="" className="w-24" />
            <p>{rec.title}</p>
            <p className="text-xs font-medium text-zinc-500">Rs.{rec.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsR2;
