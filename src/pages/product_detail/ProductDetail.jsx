import { Remove, Add } from "@material-ui/icons";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";
import { endpoints, headersPublic } from "../../endpoints";
import style from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const productId = localStorage.getItem("product_id");
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
              <Button classes="btn btn-primary" name="Add to Cart" />
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
    </div>
  );
};

export default ProductDetail;
