import React, { useContext } from "react";
//import Search from "../Search/Search";
import SearchBar from "../searchBox/SearchBox";
import PageNavigator from "../pageNavigator/PageNavigator";
import "./TopHeader.css";
import FoodContext from "../../../context/food/foodContext";
const foodContext = useContext(FoodContext);

const { isAddBtnClicked, addButtonClicked } = foodContext;

const TopHeader = () => {
  return (
    <div className="header-content">
      {addButtonClicked ? null : <SearchBar />}
      <PageNavigator className="period-top-container" />
    </div>
  );
};
export default TopHeader;
