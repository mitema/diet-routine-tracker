import React from "react";
//import Search from "../Search/Search";
import SearchBar from "../layout/SearchBar/SearchBar";
import PageNavigator from "../PageNavigator/PageNavigator";
import "./Header.css";
import PageNavigator from "../PageNavigator/PageNavigator";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar />
      <PageNavigator />
    </div>
  );
};
export default Header;
