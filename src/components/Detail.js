import React from "react";
import { Redirect, useParams } from "react-router-dom";
import products from "../products";

function Detail() {
  const slug = useParams().listSlug;

  const product = products.find((product) => product.slug === slug);

  if (!product) return <Redirect to="/" />;
  return (
    <div className="detail">
      {product && ( // if there is cookie show its data
        <>
          <br />
          <h5>{product.title}</h5>
          <br />
          <img src={product.poster} alt="cookie" />
          <br />
          <br />
          <div className="row justify-content-center">
            <p className="align-self-center col-5">{product.overview}</p>
          </div>
          <br />
        </>
      )}
    </div>
  );
}

export default Detail;
