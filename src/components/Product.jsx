import React, { useEffect, useState } from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import HeartButton from "./HeartBtn";

const Product = ({ value, setValue, fakeValue}) => {
  const [bed, Setbed] = useState();
  const [price, Setprice] = useState();
  let {state} =useLocation()


  useEffect(()=>{if (state!=null) {
    
//  search bar function
    for (let index = 0; index < fakeValue.length; index++) {
      if (state.inp.toLowerCase()==fakeValue[index].city.toLowerCase()) {
        setValue(fakeValue.filter((obj)=>obj.city.toLowerCase()==state.inp.toLowerCase()))
      }
    }}
  },[]) 

  function filtered(price, bed) {
    if ((bed==""||bed==null)&&(price==""||price==null)) {
      setValue(fakeValue)
    }
     else if ((bed == null||bed=="") && price !=null ) {
      setValue(fakeValue.filter((Obj) => price.split(" ")[0]<=Obj.price&&price.split(" ")[1]>=Obj.price));
    } else if ((price == null||price=="") && bed != null ) {
      setValue(fakeValue.filter((Obj) => Obj.bedrooms == bed));
    } 
    else {
      setValue(fakeValue.filter((Obj) => price.split(" ")[0]<=Obj.price&&price.split(" ")[1]>=Obj.price && Obj.bedrooms == bed));
    }
  }
  let sorted;
  function heart(item) {
    if (item.fav == true) {
      item.fav = false;
    } else if (item.fav == false) {
      item.fav = true;
    }
  }
  const [productdata, Setdata] = useState();
  useEffect(() => {
    Setdata(value);
  }, [productdata]);
  function changeOption(a) {
    if (a.target.value == "highprice") {
      setValue(value.toSorted((a, b) => b.price - a.price));
    } else if (a.target.value == "lowprice") {
      setValue(value.toSorted((a, b) => a.price - b.price));
    } else if (a.target.value == "mostbedrooms") {
      setValue(value.toSorted((a, b) => b.bedrooms - a.bedrooms));
    } else if (a.target.value == "leastbedrooms") {
      setValue(value.toSorted((a, b) => a.bedrooms - b.bedrooms));
    } else if (a.target.value == "mostbaths") {
      setValue(value.toSorted((a, b) => b.bathrooms - a.bathrooms));
    } else if (a.target.value == "leastbaths") {
      setValue(value.toSorted((a, b) => a.bathrooms - b.bathrooms));
    }
  }
  return (
    <>
      <div className="text-in-buy-page">
        <h1>Search Retail houses For Sale Now!</h1>
      </div>
      <div className="text-in-buy-page">
        <select name="" className="button-23" onChange={(a) => changeOption(a)}>
          <option selected disabled value="Default">Default</option>
          <option value="highprice">Highest Price</option>
          <option value="lowprice">Lowest Price</option>
          <option value="mostbedrooms">Most Bedrooms</option>
          <option value="leastbedrooms">Least Bedrooms</option>
          <option value="mostbaths">Most Baths</option>
          <option value="leastbaths">Least Baths</option>
        </select>
        <select
          name="bedrooms"
          className="button-23"
          onChange={(e) => Setbed(e.target.value)}
          >
          <option selected disabled value="null">
            Bedrooms
          </option>
          <option value="">Default</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select
          name="price"
          className="button-23"
          onChange={(e) => Setprice(e.target.value)}
          >
          <option selected disabled value="null">
            Price
          </option>
          <option value="">Default</option>
          <option value="0 250000">$0-250k</option>
          <option value="250000 500000">$250k-500k</option>
          <option value="500000 1000000">$500k+</option>
        </select>
        <button className="filter-btn" onClick={() => filtered(price, bed)}>Search</button>
        <button className="filter-btn" onClick={()=>setValue(fakeValue)}>Clear</button>
        </div>
      <div className="big-product-page">
        {value.map((item, index) => (
          <div className="Product-card" key={index}>
            <div className="Product-card-img-one">
              <Link to={`${item.zpid}`}>
                {" "}
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
              <div className="App"></div>
              <HeartButton heart={heart} item={item}></HeartButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
