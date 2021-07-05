import React from "react";
import { endpoints, headersPublic } from "../../endpoints";
import IconSection from "./icon_section/IconSection";
import LatestProducts from "../../components/latest_products/LatestProducts";
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
      <LatestProducts />
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
