import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";

const SelectModal = () => {
  const foodContext = useContext(FoodContext);
  const focusInput = React.createRef();
  const [text, setText] = useState("");
  const { foods, isAddButtonClicked } = foodContext;

  useEffect(() => {
    if (text !== "") {
      foodContext.searchFood(text);
      console.log(foods);
      setText("");
    }
    if (isAddButtonClicked) {
      console.log("in select modal");
      focusInput.current.focus();
    }
  }, [foodContext, focusInput, isAddButtonClicked, foods, text]);
  const handleOnChange = e => {
    setText(e.target.value);
  };
  return (
    <div>
      <div
        id="select-food-modal"
        className="modal"
        style={{ width: "95%", marginTop: "10px" }}
      >
        <div className="modal-content" style={{ backgroundColor: "white" }}>
          <div className="row">
            <SearchBox />
            <ul class="collection" style={{ border: "none" }}>
              <li>
                <h6>Common</h6>
              </li>
              <li
                class="collection-item avatar"
                style={{ borderBottom: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #e0e0e0"
                  }}
                >
                  <i class="material-icons circle">folder</i>
                  <a style={{ paddingBottom: "10px", color: "black" }}>
                    <span class="title">Title</span>
                    <br />
                    <span class="title">Title</span>
                  </a>
                </div>
              </li>
              <li class="collection-item avatar">
                <i class="material-icons circle">folder</i>
                <span class="title">Title</span>
              </li>
              <li class="collection-item avatar">
                <i class="material-icons circle">folder</i>
                <span class="title">Title</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
