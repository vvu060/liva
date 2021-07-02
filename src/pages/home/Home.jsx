import React, { useEffect, useState, Suspense, lazy } from "react";
import { endpoints, headersPublic } from "../../endpoints";
import axios from "axios";
import IconSection from "./icon_section/IconSection";
const LatestProducts = lazy(() =>
  import("../../components/latest_products/LatestProducts")
);
import Banner from "../../components/banner/Banner";
import ProductsRow from "../../components/products_row/ProductsRow";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const {
    response: categories,
    isError,
    isLoading,
  } = useFetch(`${endpoints.categories}`, {
    headers: headersPublic,
  });

  return (
    <div data-test="component-home">
      <Banner />
      <IconSection />
      <LatestProducts className="my-2" />
      {categories &&
        categories
          .slice(1)
          .map((category) => (
            <ProductsRow
              key={category.id}
              category={category.id}
              name={category.name}
            />
          ))}
    </div>
  );
};

export default Home;
