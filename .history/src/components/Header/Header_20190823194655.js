import React from "react";
import Search from "../Search/Search";
import HeaderLine from "../HeaderLine/HeaderLine";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="container">
      <Navbar className="Header">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Search />
        <HeaderLine />
      </Navbar>
    </div>
  );
};
export default Header;
