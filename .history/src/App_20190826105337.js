import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
/*import Profile from "./components/Profile/Profile";
import Details from "./componenents/Details";
import FoodList from "./components/FoodList";*/
import FoodState from "./context/food/FoodState";
import from

const App = () =>{
  return (
    <FoodState>
      <div className="App">
        <Header />
      </div>
    </FoodState>
  );
}

export default App;
