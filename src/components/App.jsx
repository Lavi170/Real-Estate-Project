// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Product from "./Product";
import ProductCard from "./ProductCard";
import data from "./data.json";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Favorites from "./Favorites";
import AboutUs from "./AboutUs";
import ContactUs from "./Contact";
import Agents from "./Agents";

function App() {
  
  const [fakeValue,SetfakeValue] = useState([])
  const [mainData, SetmainData] = useState([]);
  useEffect(() => {
    SetmainData(data.results);
    SetfakeValue(data.results)
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage value={mainData}/>}>
            {" "}
          </Route>
          <Route
            path="Product"
            element={<Product value={mainData} setValue={SetmainData} fakeValue={fakeValue}/>}
          ></Route>
          <Route
            path="Product/:id"
            element={<ProductCard value={mainData} />}
          ></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
          <Route path="Favorites" element={<Favorites value={mainData} setValue={SetmainData}/>}></Route>
          <Route path="About" element={<AboutUs></AboutUs>}></Route>
          <Route path="Contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="Agents" element={<Agents></Agents>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
