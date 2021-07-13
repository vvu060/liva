import { Remove, Add } from "@material-ui/icons";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import ProductCard from "../../components/products_row/product_card/ProductCard";
import ProductCardShimmer from "../../components/loading/product_card/ProductCardShimmer";
import ProductDetailShimmer from "../../components/loading/product_detail/ProductDetailShimmer";
import { endpoints, headersPublic } from "../../endpoints";
import { addToCart } from "../../helpers/addToCart";
import style from "./ProductDetail.module.scss";
import StarIcon from "@material-ui/icons/Star";

const MAX_RATING = 5;
const MIN_RATING = 2;

const ProductDetail = (props) => {
  const productId = props.match.params.productId;
  const dispatch = useDispatch();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);
  const myRef = useRef();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const getProduct = () => {
    setIsLoading(true);
    fetch(`${endpoints.products}/${productId}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setIsLoading(false);
      })
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
  }, [productId]);

  console.log(details);

  return (
    <div data-test="component-product-detail" className="container block">
      {isLoading ? (
        <Fragment>
          <ProductDetailShimmer />
        </Fragment>
      ) : (
        <Fragment>
          {details && (
            <div className={style.product}>
              <div className={style.product__images}>
                <div className={style.product__thumb} ref={myRef}>
                  {details.assets.map((image, index) => (
                    <img
                      id={index}
                      loading="lazy"
                      key={index}
                      src={image.url}
                      alt={index}
                      onClick={() => handleActiveTab(index)}
                    />
                  ))}
                </div>
                <div className={style.product__bigImage}>
                  <img
                    src={details.assets[index].url}
                    alt="image"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={style.product__details}>
                <h2 className={style.product__name} data-test="product-name">
                  {details.name}
                </h2>
                <p className={style.product__price}>
                  {details.price.formatted_with_symbol}
                </p>
                <div className={style.product__rating}>
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <StarIcon className={style.product__iconStar} />
                    ))}
                </div>
                <p
                  className={style.product__desc}
                  dangerouslySetInnerHTML={{ __html: details.description }}
                />
                <p className={style.product__unit}>
                  {details.sku}: {details.seo.title}
                </p>
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
                      loading="lazy"
                      alt="facebook"
                    />
                  </a>
                  <a href="https://www.whatsapp.com/" target="_blank">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/13-whatsapp-256.png"
                      alt="whatsapp"
                      loading="lazy"
                    />
                  </a>
                  <a href="https://www.google.com/" target="_blank">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                      loading="lazy"
                      alt="google"
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      )}

      <div class={`block ${style.product__related}`}>
        <h3>Related Products</h3>
        <div className={style.product__relatedProduct}>
          {isLoading ? (
            <Fragment>
              <ProductCardShimmer colSpace={3} />
              <ProductCardShimmer colSpace={3} />
              <ProductCardShimmer colSpace={3} />
              <ProductCardShimmer colSpace={3} />
            </Fragment>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
