import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { endpoints, headers } from "../../endpoints";
import Filters from "../../components/filters/Filters";
import ProductCard from "../../components/products_row/product_card/ProductCard";
import ProductCardShimmer from "../../components/loading/product_card/ProductCardShimmer";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import style from "./ProductListing.module.scss";
import useFetch from "react-fetch-hook";

const ProductListing = (props) => {
  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: categories,
  } = useFetch(`${endpoints.categories}`, {
    headers: headers,
  });

  const {
    isLoading: isLoadingProducts,
    error: errorProducts,
    data: products,
  } = useFetch(
    `${endpoints.products}?limit=6&category_id[]=cat_ypbroEy01o8n4e`,
    {
      headers: headers,
      // params: {
      //   category_id: ["cat_ypbroEy01o8n4e"],
      // },
    }
  );

  console.log(errorProducts);

  const breadCrumbName = props.match.path.slice(1).toUpperCase();

  return (
    <div className={`container ${style.productListing}`}>
      {/* <h5>Showing {products.length} Products</h5> */}
      {/* <BreadCrumb name={breadCrumbName} /> */}
      <div className={`col-2.5 ${style.productListing__filter}`}>
        {categories &&
          categories.data.map((category) => (
            <Filters
              key={category.id}
              category={category.id}
              name={category.name}
              id={category.id}
            />
          ))}
      </div>
      <div className={`row col-8 ${style.productListing__product}`}>
        {isLoadingProducts ? (
          <Fragment>
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
          </Fragment>
        ) : (
          <Fragment>
            {products &&
              products.data.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.assets[0]?.url}
                  name={product.name}
                  price={product.price.formatted_with_symbol}
                  colSpace={4}
                />
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
