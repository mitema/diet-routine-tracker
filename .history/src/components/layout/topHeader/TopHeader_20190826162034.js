import React from "react";
//import Search from "../Search/Search";
import SearchBox from "../searchBox/SearchBox";
import PageNavigator from "../pageNavigator/PageNavigator";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="header-container">
      <SearchField />
      <PageNavigator />
    </div>
  );
};
export default TopHeader;
