import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container portfolio_container">
        {item.map((Val) => {
          return (
            <article className="portfolio_item" key={Val.id}>
              <div className="portfolio_item-image">
                <img src={Val.img} alt={Val.title} />
              </div>
              <h3 style={{ color: "white" }}>{Val.title}</h3>
              <div className="portfolio_item-btn">
                <a href={Val.link} className="gallery_btn" target="_blank">
                  {Val.button}
                </a>
                <a
                  href={Val.demo}
                  className="gallery_btn gallery_btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Card;
