import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container portfolio_container">
       
          {item.map((Val) => {
            return (

              <article className="portfolio_item" key={Val.id}>
                <div className="portfolio_item-image">
                  <img src={Val.img} alt={Val.title}/>
                </div>
                  <h3>{Val.title}</h3>
                  <div className="portfolio_item-btn">
              <a href={Val.github} className='btn' target='_blank'>Github</a>
              <a href={Val.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
              
            );
          })}
      </div>
    </>
  );
};

export default Card;