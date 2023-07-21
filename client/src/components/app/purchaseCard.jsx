import { Link } from "react-router-dom";

const PurchaseCard = ({ id, pic, title, price }) => {
  return (
    <Link
      to={`/details/${id}`}
      className="flex  flex-col items-center bg-white h-40 w-32 rounded-lg m-2"
    >
      <img src={pic} alt={title} className="h-24" />
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-zinc-500 font-medium">Rs.{price}</p>
    </Link>
  );
};

export default PurchaseCard;
