import React from 'react'
import { Outlet, Link, useParams } from "react-router-dom";
import { useState } from 'react';
const Favorites = ({ value, index }) => {
   
        const [favorites, setFavorites] = useState(value.filter((item) => item.fav == true));
      
        function removeFromFavorites(item) {
            item.fav = false;
          setFavorites(favorites.filter((Fav) => Fav.zpid != item.zpid));
        }
    return (
        <>
        <div className="big-product-page">
       {favorites.filter((item) => item.fav == true).length!=0 ? 
          favorites.filter((item) => item.fav == true).map((item) => 
            <div className="Product-card" key={index}>
              <div className="Product-card-img-one">
                <Link to={`/Product/${item.zpid}`}>
                  <img
                    id="image-one-id"
                    src={item.imgSrc}
                    height="100%"
                    width="100%"
                    alt=""
                  />
                </Link>
              </div>
              <div className="Product-card-text-one">
                <h3>{item.price} $</h3>
                <span>{`${item.bedrooms} Bedrooms |`}</span>
                <span> {`${item.streetAddress} |`}</span>
                <span>{`${item.bathrooms} Bathrooms`} </span>
                <div> {`${item.city}, ${item.country}`}</div>
                <button onClick={() => removeFromFavorites(item)}>Remove from favorites</button>
              </div>
            </div>
          ):
          <div className='no-fav-pic'> 
          <h1>No Favorite Picked</h1>
          <p>You haven't picked any favorites yet. Start exploring and add some favorites!</p>
        </div>}
        </div>
      </>
    )
  }
export default Favorites
