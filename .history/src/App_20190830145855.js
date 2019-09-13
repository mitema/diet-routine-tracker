import React, { useEffect, useState } from "react";
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
import DetailsModal from "./components/detailsModal/DetailsModal";

const App = () => {
  const [isAddBtnClicked, setAddBtnClicked] = useState(false);

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <FoodState>
        <TopHeader />
        <AddFoodBtn />
        <SelectModal />
        <DetailsModal />
      </FoodState>
      <Profile className="profile-container" />
      <PageNavigator className="period-body-container" />
      <FoodList />
    </div>
  );
};

export default App;
