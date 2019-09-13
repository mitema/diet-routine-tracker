import React from "react";
//import Search from "../Search/Search";
import SearchBar from "../searchField/SearchField";
import PageNavigator from "../pageNavigator/PageNavigator";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="header-container">
      <SearchBar />
      <PageNavigator />
    </div>
  );
};
export default TopHeader;
