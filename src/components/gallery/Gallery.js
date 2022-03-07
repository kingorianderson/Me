import React, { useState } from "react";
import { Data } from "./../../Data"
import Card from "./Card";
import Buttons from "./Buttons";
import './gallery.css'

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
        <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">Recent Work</span>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        
      </section>
    </>
  );
};

export default File;