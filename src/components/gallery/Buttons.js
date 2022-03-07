import React from "react";
import Data from "./../../Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="portfolio_filters">
      <span
          className="work_item active-portfolio"
          onClick={() => setItem(Data)}
        >
          All
        </span>
        {menuItems.map((Val, id) => {
          return (
            <span
              className="work_item"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </span>
          );
        })}
        
      </div>
    </>
  );
};

export default Buttons;