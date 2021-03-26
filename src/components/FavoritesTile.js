import React from 'react';

function FavoritesTile({ id, name, image, cuisine, subtractFavorite }) {
    


    return (
        <div className="fave-tile">
      <h3>{name}</h3>
      <img src={image} alt={name} className="food-img"/>
      <p>{cuisine}</p>
      
    </div>
    )
}

export default FavoritesTile;