import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Header from "./components/layout/Header";
/*import Profile from "./components/Profile/Profile";
import Details from "./componenents/Details";
import FoodList from "./components/FoodList";*/
import FoodState from "./context/food/FoodState";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <FoodState>
      <div className="App">
        <Header />
        <div className="page-container">
          <div className="profile-container">profile</div>
          <div className="food-list-container">FoodList</div>
        </div>
      </div>
    </FoodState>
  );
};

export default App;
