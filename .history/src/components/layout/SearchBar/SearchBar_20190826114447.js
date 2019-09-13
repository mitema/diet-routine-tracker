import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <nav className="search-bar white">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              style={{ borderRadius: "5px" }}
              type="search"
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons" style={{ color: "black" }}>
                search
              </i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
