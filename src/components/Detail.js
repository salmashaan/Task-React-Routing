import React from "react";
import { Redirect, useParams } from "react-router-dom";
import products from "../products";

function Detail() {
  let cookie;

  const slug = useParams().listsSlug;

  const product = products.find((product) => product.slug === slug);

  if (!product) return <Redirect to="/" />;

  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{product.name}</h5>
          <img src={product.image} alt="cookie" />
          <p>{product.price} KD</p>
          <p>{product.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
