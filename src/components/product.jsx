import React from "react";
import { ProductWrapper } from "../stylesComponents/product-wrapper";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import PropTypes from "prop-types";
import { useStateValue } from "../context/stateProvider";

export default function Product({ product }) {
  const [, dispatch] = useStateValue();
  const { id, title, slug, img, price, inCart } = product;
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TOcART",
      id,
    });
    dispatch({ type: "ADD_TOTAL" });
  };

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <Link to={`/products/${slug}`}>
            <img src={img} alt={title} className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={handleAddToCart}
          >
            {inCart ? (
              <p className="text-capitalize mb-0">in cart</p>
            ) : (
              <GiShoppingCart />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h6 className="text__blue font-italic mb-0">
            <span className="me-1">{price}</span>
          </h6>
        </div>
      </div>
    </ProductWrapper>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
