import React from "react";
import './headerImg.css'

const HeaderImg = () => {
  return (
    <section>
      <div className="background">
        <div className="textbox">
          <div className="frontpage-header"> 
          <h1>Helsinki city bike data</h1>
          <p className='textbox-text'> 
          There are over 4 600 bikes in Helsinki and Espoo and 460 bike stations. 
          On this site, you can find information about bike stations, 
          bike capacity and data of over 1.5 million trips.
          </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default HeaderImg