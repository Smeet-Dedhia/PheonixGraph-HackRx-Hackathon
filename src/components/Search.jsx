import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center bg-[#F9FAFB] drop-shadow-md rounded-lg px-8 py-1.5">
      <input
        type="text"
        placeholder="Search..."
        className="placeholder:text-sm outline-none text-zinc-500"
      />
      <AiOutlineSearch className="text-lg text-[#858585]" />
    </div>
  );
};

export default Search;
