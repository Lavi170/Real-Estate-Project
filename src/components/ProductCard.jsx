import React from "react";
import { useParams } from "react-router-dom";

const ProductCard = ({ value }) => {
  let { id } = useParams();
  const found = value.find((element) => element?.zpid == id);
  return (
    <div className="Product-Card-Container">
      {found?.country}
      <header>
        <div class="container">
          <h1>{`Your Next House In ${found?.city}, ${found?.country}`}</h1>
          <nav>
            <br />
            <a href="/Product">Back</a>
          </nav>
        </div>
      </header>
      <section id="product">
        <div className="container">
          <h2 id="product-page-container-headline">Contact Our Agent</h2>
          <div className="product-info">
            <img id="map-pic" src="https://s.hdnux.com/photos/34/05/36/7362449/4/rawImage.jpg" alt="map-pic"   />
            <img id="house-pic" src={found?.imgSrc} alt="House-pic" />
            <div className="description">
              <h1>Description</h1>
              <p>{`A great family house in ${found?.city}, ${found?.country}. The current house status is for sale.`}</p>
              <h4>Address: {found?.streetAddress}, {found?.city}</h4>
              <h3>Bedrooms: {found?.bedrooms}</h3>
              <h3>Bathrooms: {found?.bathrooms}</h3>
              <h2> Price: {found?.price} $</h2>

              <a href="/Agents"><button id="buy-button">Contact An Agent Now!</button></a>
              <a href="/">
                <button id="home-button">Home page</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
