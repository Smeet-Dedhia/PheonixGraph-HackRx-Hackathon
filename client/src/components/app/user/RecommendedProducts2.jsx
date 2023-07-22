import { Link } from "react-router-dom";
import { recommended2 } from "../../../data/recommended2";

const RecommendedProducts = () => {
  return (
    <div className="">
      <h2 className="mx-4 font-semibold text-xl">Products you may like </h2>
      <div className="grid grid-cols-3 mx-auto my-6">
        {recommended2.map((product) => (
          <Link
            key={product.id}
            to={`/recommended/${product.id}`}
            className="flex  flex-col items-center justify-center bg-white h-44 w-32 rounded-lg m-2"
          >
            <img src={product.pic} alt={product.title} className="w-20" />
            <p className="text-sm font-semibold">{product.title}</p>
            <p className="text-xs text-zinc-500 font-medium">
              Rs.{product.price}
            </p>
          </Link>
        ))}
      </div>

      {/* <Routes>
        <Route
          path="/details/:id"
          render={({ match }) => (
            <ProductDetails
              product={purchase.find(
                (product) => String(product.id) === match.params.id
              )}
            />
          )}
        />
      </Routes> */}
    </div>
  );
};

export default RecommendedProducts;
