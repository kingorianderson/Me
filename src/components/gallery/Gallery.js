import React, { useState } from "react";
import { Data } from "../data";
import Card from "./Card";
// import Buttons from "./Buttons";
import "./gallery.css";

const File = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <section id="portfolio">
        <h5>Recent Work</h5>
        <h2>Portfolio</h2>

        {/* <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        /> */}
        <Card item={item} />
      </section>
    </>
  );
};

export default File;
