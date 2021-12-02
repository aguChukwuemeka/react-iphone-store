import React from "react";
import { useStateValue } from "../context/stateProvider";
import Title from "../components/title";
import { Link, useParams } from "react-router-dom";
import { ButtonContainer } from "../stylesComponents/button";
import NotFoundPage from './404'

export default function ProductDetail({match}) {
  const { slug } = useParams();
  const [{ products }, dispatch] = useStateValue();

  function handleAddToCart() {
    console.log("👉", id);
    dispatch({
      type: "ADD_TOcART",
      id,
    });
    dispatch({ type: "ADD_TOTAL" });
  }

  function getProductItem(slug) {
    return products.find((product) => product.slug === slug);
  }
  
  const productItem = getProductItem(slug);
  console.log("Product-Item : ", productItem);

  // const productItem = getProductItem(match.params.slug);
  // console.log('Path-Match : ', match);

  
  if (!productItem) return <NotFoundPage />
  
  const { id, title, img, price, company, info, inCart } = productItem;

  return (
    <div className="container">
      <div className="text__title mb-4">Details</div>
      <Title title={title} />
      <div className="row">
        <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
          <h3>model : {title}</h3>
          <h5 className="text__title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{company}</span>
          </h5>
          <h5 className="text__blue">
            <strong>
              price : <span>$</span>
              {price}
            </strong>
          </h5>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cardColor
              disabled={inCart ? true : false}
              onClick={() => handleAddToCart(id)}
            >
              {inCart ? "in cart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
