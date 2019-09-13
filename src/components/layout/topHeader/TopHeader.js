import React from "react";
import SearchBar from "../searchBox/SearchBox";
import PageNavigator from "../pageNavigator/PageNavigator";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="header-content">
      <SearchBar />
      <PageNavigator className="period-top-container" />
    </div>
  );
};
export default TopHeader;
