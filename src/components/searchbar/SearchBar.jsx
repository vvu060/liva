import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Search, Star } from "@material-ui/icons";
import BeatLoader from "react-spinners/BeatLoader";

import { endpoints, headersPublic } from "../../endpoints";

import style from "./SearchBar.module.scss";

const MAX_RATING = 5;
const MIN_RATING = 2;

const SearchBar = () => {
  const history = useHistory();
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  /**
   * Function for debounce search.
   * @function useEffect
   * @param {}
   * @returns {}
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (debouncedTerm) {
      searchProducts();
    }
  }, [debouncedTerm]);

  const searchProducts = () => {
    setLoading(true);
    fetch(`${endpoints.products}?query=${term}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  /**
   * Function to handle search form submission.
   * @function handleSubmit
   * @param {event} e - takes the event as parameter.
   * @returns {} submits form.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts();
  };

  return (
    <div data-test="component-searchbar" className={style.search}>
      <form
        className={style.search}
        role="search"
        aria-label="Search for products"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          data-test="input-field"
          type="text"
          className={`form-control ${style.search__form}`}
          placeholder="Search"
          aria-label="Enter name for search item"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button data-test="search-button" className={style.search__btn}>
          <Search className={style.search__icon} />
        </button>
      </form>

      {/* Drop Down */}
      {term && !searchResults.data && !loading && (
        <div className={style.search__result}>
          <h5>Try Searching Something Else</h5>
        </div>
      )}

      {term && loading && (
        <div className={`${style.search__result} ${style.search__loader}`}>
          <BeatLoader color="green" size={20} />
        </div>
      )}

      {term && searchResults.data?.length && (
        <div data-test="search-results" className={style.search__result}>
          {searchResults.data.slice(0, 3).map((searchItem) => (
            <div
              className={style.search__results}
              onClick={() => {
                setTerm("");
                history.push(`products/${searchItem.name}/${searchItem.id}`);
              }}
            >
              <img
                data-test="results-image"
                loading="lazy"
                src={searchItem.media.source}
                className={style.search__image}
              />
              <div data-test="results-details" className={style.search__detail}>
                <p data-test="product-name">{searchItem.name}</p>
                <p data-test="product-price">
                  {searchItem.price.formatted_with_symbol}
                </p>
                <div className={style.search__rating}>
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <Star key={i} className={style.search__iconStar} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
