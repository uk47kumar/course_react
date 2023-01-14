import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
        Home
      </Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
        Add Course
      </Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>
        View Course
      </Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>
        About
      </Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>
        Contact Us
      </Link>
    </ListGroup>
  );
};
export default Menus;
