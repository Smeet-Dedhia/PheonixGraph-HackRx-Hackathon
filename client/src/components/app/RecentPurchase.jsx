import { purchase } from "../../data/purchase";
import PurchaseCard from "./purchaseCard";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const RecentPurchase = () => {
  return (
    // <div className="mx-auto my-10">
    //   <h2 className="text-xl font-semibold "> Recent Purchase</h2>

    //   <div className="grid grid-cols-3 justify-items-center">
    // {purchase.map((product, id) => (
    //   <PurchaseCard {...product} key={id} />
    // ))}
    //   </div>
    // </div>

    <div>
      <h2>Recent Purchases: </h2>
      <div className="mx-auto my-10">
        {purchase.map((product) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="flex  flex-col items-center bg-white h-40 w-32 rounded-lg m-2"
          >
            <img src={product.pic} alt={product.title} className="h-24" />
            <p className="text-sm font-semibold">{product.title}</p>
            <p className="text-xs text-zinc-500 font-medium">
              Rs.{product.price}
            </p>
          </Link>
          // <PurchaseCard {...product} key={product.id} />
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

      <Routes>
        <Route path="details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default RecentPurchase;
