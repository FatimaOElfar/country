import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./filter.css";
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../../feature/counteriesSlice";
import { showAllCountries } from "../../feature/counteriesAction";

const Filter = () => {
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const handelDropDown = () => {
    setDisplayDropDown(!displayDropDown);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (filter == "All") {
      dispatch(showAllCountries);
    } else if (filter !== "All") {
      dispatch(setRegion(filter.toLocaleLowerCase()));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <section className="filter-container ">
      <div className="filter relative" onClick={handelDropDown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input "
        />

        <FontAwesomeIcon icon={faAngleDown} className="icon dark:text-black" />
      </div>

      {displayDropDown ? (
        <div className="dropdown dark:bg-slate-900 dark:text-white ">
          {regions.map((data, index) => {
            return (
              <div
                key={index}
                className="dropdown-item dark:text-white "
                onClick={() => {
                  setFilter(data);
                  handelDropDown();
                }}
              >
                {data}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
