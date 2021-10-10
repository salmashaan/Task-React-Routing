import React from "react";
import { Redirect, useParams } from "react-router-dom";
import products from "../products";
import ProductItem from "./ProductItem";

function Detail() {
  let cookie;
  const slug = useParams().productsSlug;
  const product = products.find((product) => products.slug === slug);
  if (!product) <Redirect to="/" />;
  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{cookie.name}</h5>
          <img src={cookie.image} alt="cookie" />
          <p>{cookie.price} KD</p>
          <p>{cookie.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
