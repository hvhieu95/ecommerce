import React, { useState } from "react";
import IconCart from "../image/icon-cart 1.png";
import Vector from "../image/Vector 1.png";
import SearchIcon from "../image/search.png";
import { Avatar } from "../components/avatar";

export function Navbar({ count }) {
  const [inputActive, setInputActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: "New product",
      list: ["Gundam Schwarzette", "Gundam Aerial", "MS-12 Gigan"],
    },
    {
      name: "Best Seller ",
      list: ["RX-78F00 Gundam", "Gundam R ", "SEED DESTINY "],
    },
    { name: "Character" },
    { name: "Genre" },
    { name: "Brand" },
  ];

  const handleInput = (event) => {
    setInputActive(event.target.value.length > 0);
  };

  const handleEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="navbar">
      <div className="group1">
        <span className="text1">Robots</span>
        <div className="frame1">
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{ position: "relative" }}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={handleLeave}
            >
              <div className="text-vector-container">
                <span className="text2">{item.name}</span>
                {activeDropdown === index && (
                  <img
                    src={Vector}
                    alt={`vector-${index}`}
                    className="vector"
                  />
                )}
              </div>
              {activeDropdown === index && item.list && (
                <div className="dropdown-list">
                  {item.list.map((element, index) => (
                    <button
                      key={index}
                      className={`dropdown-item${index + 1}`}
                      onClick={() => (window.location.href = element.url)}
                    >
                      {element}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="frame3">
          <input
            type="text"
            className={`search-input ${inputActive ? "active" : ""}`}
            onChange={handleInput}
            placeholder="Search..."
          />
          <button type="submit" className="search-button">
            <img src={SearchIcon} alt="search-icon" />
          </button>
        </div>
        <div className="frame2">
          <img src={IconCart} alt="iconcart" className="iconcart" />
          {count > 0 && <span className="cart-count">{count}</span>}
          <Avatar />
        </div>
      </div>
    </div>
  );
}
