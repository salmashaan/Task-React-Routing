import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <Link to={`/list/${product.slug}`}>
      <div className="row justify-content-center productWrapper p-7">
        <div>
          {" "}
          <br />
          <img className="poster" alt={product.title} src={product.poster} />
          <br /> <br />
          <p className="p-4 align-self-center">{product.title}</p>
          <br />
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
