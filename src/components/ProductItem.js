import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <Link to={`/List/${product.slug}`}>
      <div className="productWrapper" onClick={() => props.setCookie(product)}>
        <img alt={product.name} src={product.image} />
        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
      </div>
    </Link>
  );
};

export default ProductItem;
