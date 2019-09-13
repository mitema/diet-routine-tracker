import React from "react";
import Search from "../Search/Search";
import HeaderLine from "../HeaderLine/HeaderLine";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="Header">
        <Search />
        <HeaderLine />
      </div>
    </div>
  );
};
export default Header;
