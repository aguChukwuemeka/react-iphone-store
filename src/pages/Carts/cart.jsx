import React from "react";
import Title from "../../components/title";
import { useStateValue } from "../../context/stateProvider";
import CartColumn from "./cartColumn";
import CartLists from "./cartLists";
import CartTotals from "./cartTotals";

export default function Cart(props) {
  const [data] = useStateValue();
  const { cart } = data;
  if (!cart || cart.length === 0) {
    return (
      <div className="container">
        <div className="empty">
          <Title name="your" title="cart" />
          <div className="mx-auto text-uppercase fw-bold  text__title text-center">
            is currently empty
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <CartColumn />
        <CartLists carts={cart} />
        <CartTotals state={data} history={props.history} />
      </div>
    );
}
