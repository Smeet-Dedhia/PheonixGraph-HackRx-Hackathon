const PurchaseCard = ({ pic, title, price }) => {
  return (
    <div className="flex  flex-col items-center bg-white h-40 w-32 rounded-lg m-2">
      <img src={pic} alt={title} className="h-24" />
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-zinc-500 font-medium">Rs.{price}</p>
    </div>
  );
};

export default PurchaseCard;
