import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  searchByRegion,
  showAllCountries,
} from "../../feature/counteriesAction";
import reset, { setSearchTerm } from "../../feature/counteriesSlice";
import Loader from "../Loader";
import { Link } from "react-router-dom";

// Rest of your component code

const Cart = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const { countriesData, loading, success, error, region, searchTerm } =
    useSelector((state) => state.country);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllCountries());
    console.log("count", countriesData);
    // if (success) {
    //   setCountryData(countriesData);
    // }
    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region, searchTerm]);
  const Date = countriesData.filter((item) =>
    item.name.common.toLowerCase().includes(searchTerm)
  );

  return (
    <div className=" mx-auto w-4/5 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 ">
        {loading ? (
          <Loader loading={loading} />
        ) : (
          Date.length > 0 &&
          Date.map((data) => {
            return (
              <Link
                className="bg-white  shadow-md dark:bg-gray-800 dark:text-white rounded-lg h-full w-[250px] h-[360px] m-auto items-center"
                key={data.cca2}
                to={`/${data.cioc}`}
              >
                <div className="mb-4 flex flex-col  ">
                  <img
                    src={data.flags.png}
                    alt={data.flags.alt}
                    className="w-[250px] h-[160px] rounded-lg mb-2"
                  />
                  <h2 className="text-lg font-semibold text-center mt-2 dark:text-white">
                    {data.name.official}
                  </h2>
                </div>
                <hr className="my-2 w-full" />

                <p className="text-sm ml-2 text-gray-400 dark:text-white mb-3">
                  <span className="font-bold text-black mr-1 dark:text-white">
                    Population:{" "}
                  </span>
                  {data.population}
                </p>
                <hr className="my-2" />
                <p className="text-sm ml-2 text-gray-400 dark:text-white mb-3">
                  <span className="font-bold text-black mr-1 dark:text-white">
                    Region:{" "}
                  </span>{" "}
                  {data.region}
                </p>
                <hr className="my-2" />
                <p className="text-sm ml-2 text-gray-400 mb-2 dark:text-white mb-6">
                  <span className="font-bold text-black mr-1 dark:text-white">
                    Capital:{" "}
                  </span>{" "}
                  {data.capital}
                </p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
