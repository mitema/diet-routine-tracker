import React from "react";
//import Search from "../Search/Search";
import SearchField from "../searchField/SearchField";
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
