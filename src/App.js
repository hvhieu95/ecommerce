import React, { useState } from "react";
import "./style/index.css";
import { Navbar } from "./components/navbar";
import { Frame } from "./components/frame";
import { ProductDetail } from "./components/productDetail";
import { ProductPicture } from "./components/productPicture";

const Desktop = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(2000);

const updateCount = (newCount) => {
    setCount(newCount);
    setPrice(newCount * 2000);
  };

  return (
    <div className="container">
      <Navbar count={count} />
      <ProductDetail count={count} price={price} />
      <ProductPicture />
      <Frame setCount={updateCount} />
    </div>
  );
};

export default Desktop;
