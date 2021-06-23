import React from "react";

const ProductListing = () => {
  return (
    <div className={`container ${style.productListing}`}>
      <div className={`${style.productListing__filter}`}>
        {/* Category Filter  */}
      </div>
      <div className={`row ${style.productListing__product}`}>
        {/* Products */}
      </div>
    </div>
  );
};

export default ProductListing;
