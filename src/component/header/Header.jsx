import Search from "./Search"; // Import your Search component
import Filter from "./Filter"; // Import your Filter component

const Header = () => {
  return (
    <div className=" mt-8">
      <div className="w-[80%] items-center m-auto flex flex-col justify-between md:flex-col lg:flex-row md:justify-between sm:gap-4">
        <div className="mb-4 md:mb-0">
          <Search />
        </div>
        <div className="mt-4 md:mt-0">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Header;
