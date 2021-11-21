import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { IoMdArrowDropdown   } from "react-icons/io";
import {useStateValue} from '../context/stateProvider'

export default function NavigationBar() {
  const [{ cart }] = useStateValue();
  return (
    <Navbar className="mb-4" bg="primary" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <FaShippingFast className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/cart" className="btn cart__btn">
              <GiShoppingCart style={{ color: "#eee", fontSize: 34 }} />
              <span className="badge badge-pill badge-info">
                {cart?.length}
              </span>
              <span className=" ms-2 cart__span">
                My Cart
                <IoMdArrowDropdown />
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
