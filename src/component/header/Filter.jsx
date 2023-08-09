import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./filter.css";
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../../feature/counteriesSlice";

const Filter = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const handelDropDown = () => {
    setDisplayDropDown(!displayDropDown);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (filter !== "") {
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

        <FontAwesomeIcon icon={faAngleDown} className="icon" />
      </div>

      {displayDropDown ? (
        <div className="dropdown ">
          {regions.map((data, index) => {
            return (
              <div
                key={index}
                className="dropdown-item "
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
