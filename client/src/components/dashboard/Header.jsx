import Search from "./Search";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-12 py-4">
      <h2>Dashboard</h2>

      <Search />

      <div className="flex gap-4">
        <p className="bg-[#CBD7EC] p-2 rounded-md">
          <IoMdNotificationsOutline className="text-2xl text-[#1C62A7]" />
        </p>

        <div className="flex items-center gap-2">
          <RxAvatar className="text-3xl" />
          <div>
            <h2 className="text-xs font-bold">John Doe</h2>
            <p className="text-xs font-medium">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
