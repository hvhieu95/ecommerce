import React, { useState } from "react";
import IconMinus from "../image/icon-minus 1.png";
import IconPlus from "../image/icon-plus 1.png";
import IconCart2 from "../image/icon-cart 2.png";

export function Frame({ setCount }) {
  const [productCount, setProductCount] = useState(1);

  const increase = () => {
    setProductCount(productCount
       + 1);
  };
  const decrease = () => {
    if (productCount > 0) {
      setProductCount(productCount-1);
    }
  };
  const addToCart = () => {
    setCount(productCount);
  };
  return (
    <div className="group">
      <div className="frame">
        <button onClick={decrease} className="button-common">
         
          <img src={IconMinus} alt="iconminus" />
        </button>
        <span className="counter">{productCount}</span>
        <button onClick={increase} className="button-common">
          <img src={IconPlus} alt=" iconplus" />
        </button>
      </div>
      <button className="btn" onClick={addToCart}>
        <img alt="iconcart2" src={IconCart2} className="iconcart" />
        <span className="text">Add to cart</span>
      </button>
    </div>
  );
}
