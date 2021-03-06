import React from 'react';
import FavoritesTile from './FavoritesTile';

function FavoritesContainer({ favorites, subtractFavorite, currentUser  }) {


    const allFavorites = favorites.map((fav) => {
        return <div>
            <FavoritesTile
                key={fav.id}
                id={fav.id}
                name={fav.name}
                cuisine={fav.cuisine}
                image={fav.image}
                subtractFavorite={subtractFavorite}
                currentUser={currentUser} 
            />
         </div>
    })    

    const toRender = currentUser ? 
         (
        <div className="favorites-container">
          <h2 className="favorites-heading">Favorites</h2>
          {allFavorites}
        </div>
        ) 
        : 
        (
            <div >
                
            </div> 
        ) 
        return toRender

  
}

export default FavoritesContainer;