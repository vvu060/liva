import React, { useEffect, useState } from "react";
import { endpoints, headers } from "../../endpoints";
import axios from "axios";
import IconSection from "./icon_section/IconSection";
import LatestProducts from "./latest_products/LatestProducts";
import ProductsRow from "../../components/products_row/ProductsRow";

import "./Home.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);

  /**
   * Factory function to store product categories in categories state.
   * @function fetchCategories
   * @param - No Parameters.
   * @returns {categories} - List of categories from commerce js.
   */
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${endpoints.categories}`, {
        headers: headers,
      });

      setCategories(data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div data-test="component-home">
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
