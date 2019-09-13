import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";
import "./SelectModal.css";

const SelectModal = () => {
  const [text, setText] = useState("");
  const foodContext = useContext(FoodContext);
  const focusInput = React.createRef();
  const { foods, isAddBtnClicked } = foodContext;

  useEffect(() => {
    if (text !== "") {
      foodContext.searchFood(text);
      console.log(foods);
      setText("");
    }
    if (isAddBtnClicked) {
      console.log("in select modal");
      focusInput.current.focus();
    }
  }, [foodContext, focusInput, isAddBtnClicked, foods, text]);
  const handleOnChange = e => {
    setText(e.target.value);
  };
  return (
    <div>
      <div
        id="select-food-modal"
        className="modal"
        style={{
          width: "95%",
          marginTop: "10px",
          height: "100%",
          backgroundColor: "transparent"
        }}
      >
        <SearchBox
          modalMarginBottom={"5px"}
          modalWidth={"100%"}
          modalMarginTop={"0px"}
          ref={focusInput}
        />
        <div
          className="modal-content"
          style={{ padding: "0px", backgroundColor: "white", height: "100%" }}
        >
          <div className="row">
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
