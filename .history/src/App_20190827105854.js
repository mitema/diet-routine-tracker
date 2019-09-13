import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBox from "./components/layout/searchBox/SearchBox";
import TopHeader from "./components/layout/topHeader/TopHeader";
import FoodState from "./context/food/FoodState";
import AddFoodBtn from "./components/layout/AddFoodBtn";
import FoodList from "./components/foodList/FoodList";
import Profile from "./components/profile/Profile";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <FoodState>
      <div className="App">
        <AddFoodBtn />
        <TopHeader />
        <Profile />
        <FoodList />
      </div>
    </FoodState>
  );
};

export default App;
