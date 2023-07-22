import logo from "../../assets/app.png";
import Search from "./Search";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-col  gap-4 items-center bg-[#012A52] h-30 py-2 text-white">
      <div className="w-full flex justify-between items-center px-6">
        <Link to="/app">
          <img src={logo} alt="bajaj" className="h-10" />
        </Link>
        {/* dropdown - TODO  */}

        <details className="dropdown">
          <summary className="btn bg-[#0065ae] text-white hover:bg-[#195086]">
            Prajna
          </summary>
          <ul className="shadow menu dropdown-content bg-[#0065ae] w-15 z-[1] bg-base-100 rounded-box w-52">
            <li>
              <Link to="/app/user2" className="active:bg-[#EA0000]">
                Guest
              </Link>
            </li>
            {/* <li>
              <a>def</a>
            </li> */}
          </ul>
        </details>
      </div>

      <Search />
    </div>
  );
};

export default Header;
