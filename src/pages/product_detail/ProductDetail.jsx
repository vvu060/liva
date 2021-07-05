import { Remove, Add } from "@material-ui/icons";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import ProductCard from "../../components/products_row/product_card/ProductCard";
import { endpoints, headersPublic } from "../../endpoints";
import { addToCart } from "../../helpers/addToCart";
import style from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const productId = localStorage.getItem("product_id");
  const dispatch = useDispatch();
  const [details, setDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);
  const myRef = useRef();

  const getProduct = () => {
    fetch(`${endpoints.products}/${productId}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((quantity) => (quantity -= 1));
  };

  const increaseQuantity = () => {
    setQuantity((quantity) => (quantity += 1));
  };

  const handleActiveTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;

    for (let i = 0; i < images.length; i++) {
      console.log(images[i].className);
      images[i].id = images[i].id.replace("active", "");
    }

    images[index].id = "active";
  };

  const addItemToCart = () => {
    addToCart(productId, dispatch, quantity);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(details);

  return (
    <div className="container block">
      {details && (
        <div className={style.product}>
          <div className={style.product__images}>
            <div className={style.product__thumb} ref={myRef}>
              {details.assets.map((image, index) => (
                <img
                  id="active"
                  key={index}
                  src={image.url}
                  alt=""
                  onClick={() => handleActiveTab(index)}
                />
              ))}
            </div>
            <div className={style.product__bigImage}>
              <img src={details.assets[index].url} alt="" />
            </div>
          </div>

          <div className={style.product__details}>
            <h2 className={style.product__name}>{details.name}</h2>
            <p className={style.product__price}>
              {details.price.formatted_with_symbol}
            </p>
            <p className={style.product__desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              ipsam reiciendis quibusdam? Repellat, suscipit esse sapiente
              consectetur, recusandae quis optio fugiat alias asperiores saepe
              sint cupiditate porro fugit. Id, blanditiis!
            </p>
            <p className={style.product__unit}>Size: 10g</p>
            <div className={style.product__qty}>
              <div className={style.product__qtyInput}>
                <Remove
                  className={style.product__icon}
                  onClick={decreaseQuantity}
                />
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Add
                  className={style.product__icon}
                  onClick={increaseQuantity}
                />
              </div>
              <Button
                classes="btn btn-primary"
                name="Add to Cart"
                onClick={addItemToCart}
              />
            </div>
            <div className={style.product__share}>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
                  alt=""
                />
              </a>
              <a href="https://www.whatsapp.com/" target="_blank">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/13-whatsapp-256.png"
                  alt=""
                />
              </a>
              <a href="https://www.google.com/" target="_blank">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      )}
      <div class="">
        {details &&
          details.related_products
            .slice(0, 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                image={product.media.source}
                name={product.name}
                price={product.price.formatted_with_symbol}
                colSpace={3}
              />
            ))}
      </div>
    </div>
  );
};

export default ProductDetail;
