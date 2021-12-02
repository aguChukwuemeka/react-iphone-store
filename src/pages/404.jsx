import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonContainer } from "../stylesComponents/button";

export default function NotFoundPage(props) {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text__title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested url:
            {/* <span className="text-danger">{props?.location?.pathname}</span> was */}
            <span className="text-danger ms-2">{location?.pathname}</span> was
            not found
          </h3>
          <div className="my-3 py-3">
            <ButtonContainer as={Link} to="/">
              Navigate Back to Products
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
