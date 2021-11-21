import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-3 text-center text__title">
        <h3 className="text-uppercase fw-bold">
          {name}
          <strong className="text__blue ms-2">{title}</strong>
        </h3>
      </div>
    </div>
  );
}
