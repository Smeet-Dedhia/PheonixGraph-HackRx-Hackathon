import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center  bg-gray-100 drop-shadow-sm rounded-lg px-8 py-1.5">
      <input
        type="text"
        placeholder="Search..."
        className="placeholder:text-sm outline-none w-80 bg-gray-100 text-zinc-500"
      />
      <AiOutlineSearch className="text-lg text-[#858585]" />
    </div>
  );
};

export default Search;
