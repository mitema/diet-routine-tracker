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
import PageNavigator from "./components/layout/pageNavigator/PageNavigator";
import SelectModal from "./components/selectModal/SelectModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
    const instance = M.Modal.getInstance("#select-food-modal");
    instance.isOpen(console.log("it is open"));
  });
  return (
    <FoodState>
      <div className="App">
        <TopHeader />
        <AddFoodBtn />
        <SelectModal />
        <Profile className="profile-container" />
        <PageNavigator className="period-body-container" />
        <FoodList />
      </div>
    </FoodState>
  );
};

export default App;
