import { purchase2 } from "../../../data/purchase2";
import { Link } from "react-router-dom";

const RecentPurchase2 = () => {
  return (
    <div className="my-12">
      <h2 className="mx-4 font-semibold text-xl">Recent Purchases: </h2>
      <div className="grid grid-cols-3 mx-auto my-6">
        {purchase2.map((product) => (
          <Link
            key={product.id}
            to={`/details2/${product.id}`}
            className="flex  flex-col items-center justify-center bg-white h-44 w-32 rounded-lg m-2"
          >
            <img src={product.pic} alt={product.title} className="h-24" />
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

export default RecentPurchase2;
