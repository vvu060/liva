import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

import { endpoints, headersPublic } from "../../endpoints";
import useFetch from "../../hooks/useFetch";

import ProductCard from "./product_card/ProductCard";
import ProductCardShimmer from "../loading/product_card/ProductCardShimmer";

import style from "./ProductsRow.module.scss";

const ProductsRow = ({ category, name }) => {
  const {
    response: products,
    isError,
    isLoading,
  } = useFetch(`${endpoints.products}`, {
    params: {
      limit: 4,
      category_id: [`${category}`],
    },
    headers: headersPublic,
  });

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
            <ArrowForwardRoundedIcon className={style.productsRow__icon} />
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
                  productId={product.id}
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
