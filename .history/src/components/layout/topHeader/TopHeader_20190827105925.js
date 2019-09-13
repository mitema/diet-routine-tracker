import React from "react";
//import Search from "../Search/Search";
import SearchBar from "../searchBox/SearchBox";
import PageNavigator from "../pageNavigator/PageNavigator";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="header-container">
      <SearchBar />
    </div>
  );
};
export default TopHeader;
