import React, { Fragment } from "react";

import { endpoints, headersPublic } from "../../endpoints";
import useFetch from "../../hooks/useFetch";

import LatestProduct from "./latest_product/LatestProduct";
import LatestProductShimmer from "../loading/latest_product/LatestProductShimmer";

import style from "./LatestProducts.module.scss";

const LatestProducts = () => {
  const {
    response: products,
    isError,
    isLoading,
  } = useFetch(`${endpoints.products}`, {
    params: {
      limit: 6,
      category_id: ["cat_ypbroEy01o8n4e"],
    },
    headers: headersPublic,
  });

  return (
    <div
      data-test="component-latest-products"
      className={`container ${style.latestProducts}`}
    >
      <div
        data-test="latest-products-heading"
        className={style.latestProducts__title}
      >
        <p>See Out Latest</p>
        <h2>Arrival Products</h2>
      </div>
      <div className="row">
        {isLoading ? (
          <Fragment>
            <LatestProductShimmer />
            <LatestProductShimmer />
            <LatestProductShimmer />
            <LatestProductShimmer />
            <LatestProductShimmer />
            <LatestProductShimmer />
          </Fragment>
        ) : (
          <Fragment>
            {products &&
              products.map((product) => (
                <LatestProduct
                  key={product.id}
                  image={product.assets[0]?.url}
                  name={product.name}
                  price={product.price.formatted_with_symbol}
                  productId={product.id}
                />
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default LatestProducts;
