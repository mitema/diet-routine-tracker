import React from "react";
//import Search from "../Search/Search";
import SearchBar from "../layout/SearchBar/SearchBar";
import HeaderLine from "../HeaderLine/HeaderLine";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar />
      <HeaderLine />
    </div>
  );
};
export default Header;
