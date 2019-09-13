import React from "react";
//import Search from "../Search/Search";
import SearchBar from "../layout/SearchBar/SearchBar";
import HeaderLine from "../HeaderLine/HeaderLine";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="Header">
        <SearchBar />
        <HeaderLine />
      </div>
    </div>
  );
};
export default Header;
