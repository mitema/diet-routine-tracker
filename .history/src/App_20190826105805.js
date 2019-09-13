import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Header from "./components/Header/Header";
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
      </div>
    </FoodState>
  );
};

export default App;
