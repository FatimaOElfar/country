import "./countery.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchByCode } from "../../feature/counteriesAction";
import reset from "../../feature/counteriesSlice";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Country = () => {
  const { loading, error, countrySearch } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    console.log("search-code", countrySearch);
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }
    if (error) {
      console.log(error);
    }
    return () => {
      dispatch(reset);
    };
  }, [dispatch, code, error]);
  return (
    <section className="country-detail-container">
      <Link className="back-button" to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="text-gray-500" />
        <span className="text-gray-500">Back To Home</span>
      </Link>

      <div className="country-detail-content md:flex-col sm:flex-col lg:flex-row">
        {countrySearch.length > 0 ? (
          <>
            <img
              src={countrySearch[0].flags.png}
              alt={countrySearch[0].flags.alt}
              className="country-detail-image md:mt-8"
            />

            <div className="country-detail-right">
              <h1>{countrySearch[0].name.common}</h1>
              <div className="details ">
                <div className="detail-left">
                  <p>
                    Native Name: <span>{countrySearch[0].name.official}</span>
                  </p>
                  <hr className="country-hr" />
                  <p>
                    Population: <span>{countrySearch[0].population}</span>
                  </p>
                  <hr className="country-hr" />
                  <p>
                    Region: <span>{countrySearch[0].region}</span>
                  </p>
                  <hr className="country-hr" />

                  <p>
                    Sub Region: <span>{countrySearch[0].subregion}</span>
                  </p>
                  <hr className="country-hr" />
                  <p>
                    Capital: <span>{countrySearch[0].capital}</span>
                  </p>
                  <hr className="country-hr" />
                </div>

                <div className="detail-right">
                  <p>
                    Top Level Domain: <span>{countrySearch[0].tld[0]}</span>
                  </p>
                  <hr className="country-hr" />
                  <p>
                    Currencies:
                    <span>
                      {Object.values(countrySearch[0].currencies)
                        .map((data) => {
                          return data.name;
                        })
                        .join(",")}
                    </span>
                  </p>
                  <hr className="country-hr" />

                  <p>
                    Languages:
                    <span>
                      {Object.values(countrySearch[0].languages)
                        .map((data) => {
                          return data;
                        })
                        .join(",")}
                    </span>
                  </p>
                  <hr className="country-hr" />
                </div>
              </div>

              <div className="border-country">
                <div>
                  <p>Border Countries:</p>
                </div>
                <div className="border-country-list">
                  {countrySearch[0].borders ? (
                    countrySearch[0].borders.map((data, index) => {
                      return (
                        <Link
                          className="border-name"
                          to={`/${data}`}
                          key={index}
                        >
                          <p>{data}</p>
                        </Link>
                      );
                    })
                  ) : (
                    <span>No Borders</span>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>NO Details Found</div>
        )}
      </div>
    </section>
  );
};

export default Country;
