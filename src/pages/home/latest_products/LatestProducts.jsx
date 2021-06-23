import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { endpoints, headers } from "../../../endpoints";
import LatestProduct from "./latest_product/LatestProduct";
import LatestProductShimmer from "../../../components/loading/latest_product/LatestProductShimmer";
import style from "./LatestProducts.module.scss";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Factory function to fetch & store products from a category in products state.
   * @function getProducts
   * @param - No Parameters.
   * @returns {products} - List of products from commerce js.
   */
  const getProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${endpoints.products}`, {
        params: {
          limit: 6,
          category_id: ["cat_ypbroEy01o8n4e"],
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
    getProducts();
  }, []);

  return (
    <div
      data-test="component-latest-products"
      className={`container ${style.latestProducts}`}
    >
      <div className={style.latestProducts__title}>
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
                />
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default LatestProducts;
