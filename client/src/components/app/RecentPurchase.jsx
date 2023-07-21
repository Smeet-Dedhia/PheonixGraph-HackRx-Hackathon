import { purchase } from "../../data/purchase";
import PurchaseCard from "./purchaseCard";

const RecentPurchase = () => {
  return (
    <div className="mx-auto my-10">
      <h2 className="text-xl font-semibold "> Recent Purchase</h2>

      <div className="grid grid-cols-3 justify-items-center">
        {purchase.map((product, id) => (
          <PurchaseCard {...product} key={id} />
        ))}
      </div>
    </div>
  );
};

export default RecentPurchase;
