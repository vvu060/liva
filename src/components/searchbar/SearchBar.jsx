import { useState, useRef, useEffect } from "react";
import style from "./SearchBar.module.scss";
import { endpoints, headersPublic } from "../../endpoints";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import BeatLoader from "react-spinners/BeatLoader";

const SearchBar = () => {
  const history = useHistory();
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchProducts = () => {
    setLoading(true);
    fetch(`${endpoints.products}?query=${term}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts();
  };

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

  return (
    <div className={style.search}>
      <form
        className={style.search}
        role="search"
        aria-label="Search for products"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
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
        <button className={style.search__btn}>
          <SearchIcon className={style.search__icon} />
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
        <div className={style.search__result}>
          {searchResults.data.slice(0, 3).map((searchItem) => (
            <div
              className={style.search__results}
              onClick={() => {
                setTerm("");
                history.push(`products/${searchItem.name}/${searchItem.id}`);
              }}
            >
              <img
                src={searchItem.media.source}
                className={style.search__image}
              />
              <div className={style.search__detail}>
                <p>{searchItem.name}</p>
                <p>{searchItem.price.formatted_with_symbol}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
