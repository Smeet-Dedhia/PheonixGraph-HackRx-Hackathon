import logo from "../../assets/app.png";
import Search from "./Search";
const Header = () => {
  return (
    <div className="flex justify-around items-center bg-[#012A52] h-20 text-white">
      <img src={logo} alt="bajaj" className="h-10" />

      <Search />

      {/* dropdown - TODO  */}
      <h2>Prajna</h2>
    </div>
  );
};

export default Header;
