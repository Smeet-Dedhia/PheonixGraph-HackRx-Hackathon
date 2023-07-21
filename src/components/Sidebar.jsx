import {
  FiShoppingCart,
  FiShoppingBag,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Logo from "./Logo";

const links = [
  {
    label: "Dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    label: "Order",
    icon: <FiShoppingCart />,
  },
  {
    label: "Products",
    icon: <FiShoppingBag />,
  },
  {
    label: "Settings",
    icon: <FiSettings />,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-[#FFFFFF] drop-shadow-md h-screen py-12 w-1/6  px-8">
      <div className="flex flex-col gap-12">
        {/* logo  */}
        <Logo />

        {/* navigation  */}
        <div className="flex flex-col gap-8">
          {links.map((item, id) => (
            <div key={id} className="flex items-center gap-3">
              <p className="text-xl"> {item.icon}</p>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* logout  */}
      <div className="flex items-center gap-2 mt-12">
        <FiLogOut />
        <h2>Logout</h2>
      </div>
    </div>
  );
};

export default Sidebar;
