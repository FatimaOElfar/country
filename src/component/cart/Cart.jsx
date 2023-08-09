import { useEffect, useState } from "react";
import axios from "axios";
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
                className="bg-white  shadow-md  rounded-lg h-full"
                key={data.cca2}
                to={`/${data.cioc}`}
              >
                <div className="mb-4 flex flex-col  ">
                  <img
                    src={data.flags.png}
                    alt={data.flags.alt}
                    className="w-full rounded-lg mb-2  "
                  />
                  <h2 className="text-lg font-semibold text-center mt-2">
                    {data.name.official}
                  </h2>
                </div>
                <hr className="my-2 w-full" />

                <p className="text-sm ml-2 text-gray-400">
                  <span className="font-bold text-black ">Population:</span>
                  {data.population}
                </p>
                <hr className="my-2" />
                <p className="text-sm ml-2 text-gray-400">
                  <span className="font-bold text-black ">Region:</span>{" "}
                  {data.region}
                </p>
                <hr className="my-2" />
                <p className="text-sm ml-2 text-gray-400 mb-2">
                  <span className="font-bold text-black ">Capital:</span>{" "}
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
