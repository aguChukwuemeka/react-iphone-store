import React from "react";
import { useStateValue } from "../context/stateProvider";
import { ModalContainer } from "../stylesComponents/modal-container";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../stylesComponents/button";

export default function ProductModal() {
  const [{ modalProduct, modalOpen }, dispatch] = useStateValue();
  const { img, title, price } = modalProduct;
  // console.log("㊙️", modalOpen);
  // console.log("㊙️㊗️", modalProduct);

  if (!modalOpen) {
    return null;
  } else
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center py-3 text-capital"
            >
              <h5>Item added to cart</h5>
              <img src={img} alt={title} className="img-fluid" />
              <h5>{title}</h5>
              <h5 className="text-muted">price : $ {price}</h5>
              <div className="modal__button__container">
                <ButtonContainer
                  as={Link}
                  to="/"
                  onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                >
                  continue shopping
                </ButtonContainer>
                <ButtonContainer
                  as={Link}
                  to="/cart"
                  gotocart='true'
                  onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                >
                  go to cart
                </ButtonContainer>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
}
