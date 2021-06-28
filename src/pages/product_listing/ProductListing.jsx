import React, { useState, Fragment } from "react";
import { endpoints, headers } from "../../endpoints";
import useFetch from "react-fetch-hook";
import Filters from "../../components/filters/Filters";
import ProductCard from "../../components/products_row/product_card/ProductCard";
import ProductCardShimmer from "../../components/loading/product_card/ProductCardShimmer";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import style from "./ProductListing.module.scss";

const ProductListing = (props) => {
  const [categoryId, setCategoryId] = useState("cat_gvRjwOQmG54mNL");

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
  } = useFetch(`${endpoints.products}?limit=6&category_id[]=${categoryId}`, {
    headers: headers,
  });

  const breadCrumbName = props.match.path.slice(1).toUpperCase();

  const parentCallback = (categoryId) => {
    setCategoryId(categoryId);
  };

  return (
    <div className={`container ${style.productListing}`}>
      <h3>Categories</h3>
      <div className={`${style.productListing__filter}`}>
        {/* Category Filter  */}
        {categories &&
          categories.data.map((category) => (
            <Filters
              key={category.id}
              category={category.id}
              name={category.name}
              id={category.id}
              image={category.description}
              parentCallback={parentCallback}
            />
          ))}
      </div>
      <div className={`row ${style.productListing__product}`}>
        {/* Products */}
        {isLoadingProducts ? (
          <Fragment>
            <ProductCardShimmer colSpace={3} />
            <ProductCardShimmer colSpace={3} />
            <ProductCardShimmer colSpace={3} />
            <ProductCardShimmer colSpace={3} />
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
                  colSpace={3}
                />
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
