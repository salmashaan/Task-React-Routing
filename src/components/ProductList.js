import { useState } from "react";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="item-container">
        <div className="listWrapper">{productList}</div>
      </div>
    </>
  );
};

export default ProductList;
