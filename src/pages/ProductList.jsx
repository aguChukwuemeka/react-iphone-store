import React from "react";
import Title from "../components/title";
import { useStateValue } from "../context/stateProvider";
import Product from "../components/product";

export default function ProductList() {
  const [{ products }] = useStateValue();
  // console.log(products)
  return (
    <div className="container">
      <Title name="our" title="products" />
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
