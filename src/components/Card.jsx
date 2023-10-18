import React from 'react';

const Card = ({br}) => {
    return (
    <div className="card   bg-base-100 shadow-xl image-full">
  <figure><img src={br.brandImage} className='' alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{br.brandName}</h2>
    
  </div>
</div>
    );
};

export default Card;