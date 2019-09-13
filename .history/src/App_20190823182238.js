import React from "react";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Details from "./componenents/Details";
import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Details />
      <FoodList />
    </div>
  );
}

export default App;
