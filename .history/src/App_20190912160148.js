import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import TopHeader from "./components/layout/topHeader/TopHeader";
import FoodState from "./context/food/FoodState";
import AddFoodBtn from "./components/layout/AddFoodBtn";
import NutrientInfo from "./components/nutientInfo/NutrientInfo";
import Profile from "./components/profile/Profile";
import PageNavigator from "./components/layout/pageNavigator/PageNavigator";
import SelectModal from "./components/selectModal/SelectModal";
import DetailsModal from "./components/detailsModal/DetailsModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250
    };
    M.Modal.init(SelectModal(), options);
    const instance = M.Modal.getInstance(SelectModal());
    instance.open();
  });

  return (
    <div className="App">
      <FoodState>
        <TopHeader />
        <AddFoodBtn />
        <SelectModal />
        <DetailsModal />
        <NutrientInfo />
        <Profile className="profile-container" />
        <PageNavigator className="period-body-container" />
      </FoodState>
    </div>
  );
};

export default App;
