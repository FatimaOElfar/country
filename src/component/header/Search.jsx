import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../feature/counteriesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.country);
  const handelInputValueChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };
  return (
    <div className="flex items-center border rounded shadow-md p-2 dark:text-white">
      <BsSearch
        size={20}
        color="gray"
        
        className="mr-2 dark:text-white"
      />
      <input
        type="text"
        className="flex-grow px-1 dark:bg-slate-900 dark:text-white focus:outline-none w-full sm:w-64 md:w-96 lg:w-128 text-gray-400 text-sm"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handelInputValueChange}
      />
    </div>
  );
};

export default Search;
