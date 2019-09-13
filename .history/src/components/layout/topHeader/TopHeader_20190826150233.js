import React from "./node_modules/react";
//import Search from "../Search/Search";
import SearchBar from "./SearchBar/SearchBar";
import PageNavigator from "../PageNavigator/PageNavigator";
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
