import { useParams } from "react-router-dom";
import { purchase } from "../../data/purchase";
import logo from "../../assets/app.png";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;

  const reqP = purchase.filter((product) => product.id == id);
  console.log(reqP);

  return (
    <div className="max-w-md mx-auto h-screen bg-[#E3E7F5]">
      <header className="flex justify-center items-center p-2 bg-[#022a52] mb-8">
        <img src={logo} alt="" />
      </header>

      {/* product-details  */}
      <div className="">
        <img src={reqP[0].pic} alt="" />
        <h2>{reqP[0].title}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
