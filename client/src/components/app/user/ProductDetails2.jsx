import { Link, useParams } from "react-router-dom";
import { purchase2 } from "../../../data/purchase2";
import logo from "../../../assets/app.png";
import { AiFillStar } from "react-icons/ai";

const ProductDetails2 = () => {
  const params = useParams();
  const { id } = params;

  const reqP = purchase2.filter((product) => product.id == id);
  console.log(reqP);

  return (
    <div className="max-w-md mx-auto h-screen border-x border-gray-300 bg-[#E3E7F5] text-black">
      <header className="flex justify-center items-center p-3 bg-[#022a52] mb-8">
        <Link to="/app">
          <img src={logo} alt="" />{" "}
        </Link>
      </header>

      {/* product-details  */}
      <div className="flex flex-col items-center gap-4 mt-20">
        <img src={reqP[0].pic} alt="" className="h-80" />
        <div className="flex items-center gap-4 ">
          <h2 className="text-2xl font-semibold">{reqP[0].title}</h2>
          <p className="bg-green-200 w-10 flex text-green-600  items-center justify-center py-0.5 border border-green-600 rounded">
            <AiFillStar className="text-green-500" />
            {reqP[0].rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails2;
