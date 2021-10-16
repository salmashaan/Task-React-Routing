import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <Link to={`/list/${product.slug}`}>
      <div className="productWrapper">
        <img alt={product.title} src={product.poster} />
        <br /> <br />
        <p>{product.title}</p>
        <br />
      </div>
    </Link>
  );
};

export default ProductItem;
