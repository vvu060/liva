import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { endpoints, headers } from "../../endpoints";
import style from "./ProductsRow.module.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";
import ProductCard from "./product_card/ProductCard";
import ProductCardShimmer from "../loading/product_card/ProductCardShimmer";

const ProductsRow = ({ category, name }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Factory function to fetch & store products from a category in products state.
   * @function fetchProducts
   * @param - No Parameters.
   * @returns {products} - List of products from commerce js.
   */
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${endpoints.products}`, {
        params: {
          limit: 4,
          category_id: [`${category}`],
        },
        headers: headers,
      });
      setProducts(data.data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      data-test="component-products-row"
      className={`container ${style.productsRow}`}
    >
      <div className={style.productsRow__title}>
        <h4 data-test="category-name">{name}</h4>
        <a href="/products">
          View More{" "}
          <span>
            <ArrowForwardIosIcon />
          </span>{" "}
        </a>
      </div>
      <div className={`row ${style.productsRow__card}`}>
        {isLoading ? (
          <Fragment>
            <ProductCardShimmer colSpace={4} />
            <ProductCardShimmer colSpace={4} />
            <ProductCardShimmer colSpace={4} />
            <ProductCardShimmer colSpace={4} />
          </Fragment>
        ) : (
          <Fragment>
            {products &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.assets[0]?.url}
                  name={product.name}
                  price={product.price.formatted_with_symbol}
                  colSpace={3}
                />
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

ProductsRow.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductsRow;
