import React from "react";
import { endpoints, headers } from "../../endpoints";
import useFetch from "react-fetch-hook";

const ProductListing = () => {
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

  return (
    <div className={`container ${style.productListing}`}>
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
      </div>
    </div>
  );
};

export default ProductListing;
