import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import TopHeader from "./components/layout/topHeader/TopHeader";
import FoodState from "./context/food/FoodState";
import AddFoodBtn from "./components/layout/AddFoodBtn";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <FoodState>
      <div className="App">
        <TopHeader />
        <AddFoodBtn />
        <div className="page-container">
          <div className="profile-container">profile</div>
          <div className="food-list-container">FoodList</div>
        </div>
      </div>
    </FoodState>
  );
};

export default App;
