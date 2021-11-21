import React from "react";

export default function CartColumn() {
  return (
    <div className="container-fluid d-none d-lg-block text-center">
      <div className="row">
        <div className="col-10 col-lg-2 mx-auto">
          <div className="text-uppercase">products</div>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <div className="text-uppercase">name of products</div>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <div className="text-uppercase">price</div>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <div className="text-uppercase">quality</div>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <div className="text-uppercase">remove</div>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <div className="text-uppercase">total</div>
        </div>
      </div>
    </div>
  );
}
