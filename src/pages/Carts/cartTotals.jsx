import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/stateProvider";
import PaypalButton from "./payPalButton";

export default function CartTotals(props) {
  const { cartSubTotal, cartTax, cartTotal } = props.state;
  const [, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize">
            <div className="total__box">
              <div className="total__box__container">
                <Link
                  to="/"
                  className="btn btn-outline-danger mb-3 px-5 text-uppercase"
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                >
                  clear cart
                </Link>
                <h5>
                  <span className="text__title">subtotal :</span>
                  <strong>$ {cartSubTotal}</strong>
                </h5>
                <h5>
                  <span className="text__title">tex :</span>
                  <strong>$ {cartTax}</strong>
                </h5>
                <h5>
                  <span className="text__title">total :</span>
                  <strong>$ {cartTotal}</strong>
                </h5>
                <PaypalButton
                  total={cartTotal}
                  history={props.history}
                ></PaypalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
