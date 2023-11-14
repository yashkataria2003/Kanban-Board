import React from 'react'
import '../Card/Card.css';
import image from '../../Assets/image.png';
import exclamation_black from '../../Assets/exclamation_black.png';

const Card = ({ id, title, tags }) => {
  return (
    <div className='cardContainer'>
      <div className="cardHeading">
        <span>{id}</span>
        <div className="cardHeadingImage">
          <img src={image} alt="card heading logo" className='cardHeadingImageLogo' />
        </div>
      </div>
      
      <div className="cardTitle">
        <p>{title}</p>
      </div>

      <div className="cardTag">
        <div className="cardTagContainer">
          <img src={exclamation_black} alt="exclimination mark" className="cardTagLogo" />
        </div>
        {
          tags?.map((element, index) => {
            return (
              <div key={index} className="tag">
                <span>●</span> {element}
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Card
