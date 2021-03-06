import React, { useContext } from "react";
//import Search from "../Search/Search";
import SearchBar from "../searchBox/SearchBox";
import PageNavigator from "../pageNavigator/PageNavigator";
import "./TopHeader.css";
import FoodContext from "../../../context/food/foodContext";
import src from "*.gif";

const TopHeader = () => {
  const foodContext = useContext(FoodContext);
  const { isAddBtnClicked, addButtonClicked } = foodContext;

  return (
    <div className="header-content">
      {isAddBtnClicked ? null : <SearchBar />}
      <PageNavigator className="period-top-container" />
    </div>
  );
};
export default TopHeader;
