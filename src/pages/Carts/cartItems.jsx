import React from "react";
import { useStateValue } from "../../context/stateProvider";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItems({ items }) {
  const { id, title, img, price, total, count } = items;

  const [, dispatch] = useStateValue();
  return (
    <div className="row my-5 text-capital text-center">
      <div className="col-10 col-lg-2 mx-auto">
        <img
          src={img}
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
          alt={`${title} product`}
        />
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">product :</span>
        {title}
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">price :</span>$ {price}
      </div>
      <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            {count <= 1 ? (
              <span className="btn btn__black mx-1 disabled border-none muted">
                -
              </span>
            ) : (
              <span
                className="btn btn__black mx-1 fw-bold"
                onClick={() => {
                  dispatch({ type: "DECREMENT_NumberOfCART", id });
                  dispatch({ type: "ADD_TOTAL" });
                }}
              >
                -
              </span>
            )}
            <span className="btn btn__black mx-1 fw-bold disabled">
              {count}
            </span>
            <span
              className="btn btn__black mx-1 fw-bold"
              onClick={() => {
                dispatch({ type: "INCREMENT_NumberOfCART", id });
                dispatch({ type: "ADD_TOTAL" });
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <RiDeleteBin6Line
          className="cart__icon"
          onClick={() => {
            dispatch({ type: "REMOVE", id });
            dispatch({ type: "ADD_TOTAL" });
          }}
        />
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <strong>item total :</strong> $ {total}
      </div>
    </div>
  );
}
