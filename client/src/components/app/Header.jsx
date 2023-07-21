import logo from "../../assets/app.png";
import Search from "./Search";
const Header = () => {
  return (
    <div className="flex flex-col  gap-4 items-center bg-[#012A52] h-28 py-2 text-white">
      <div className="w-full flex justify-between items-center px-6">
        <img src={logo} alt="bajaj" className="h-10" />
        {/* dropdown - TODO  */}
        <h2>Prajna</h2>
      </div>

      <Search />
    </div>
  );
};

export default Header;
