import React, { useState } from "react";
import AvatarImage from "../image/image-avatar 1.png";
import Login from "../image/login.png";

export function Avatar() {
  const [showLogin, setShowLogin] = useState(false);
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div
      onMouseEnter={() => setShowLogin(true)}
      onMouseLeave={() => setShowLogin(false)}
    >
      <img src={AvatarImage} alt="avatar" className="avatar" />
      {showLogin && (
        <div className="loginbox">
          <button
            style={{
              border: "none",
              background: "transparent",
              outline: "none",
              cursor:"pointer"
            }}
            type="submit"
            onClick={handleClick}
          >
            <img
              style={{
                width: "25px",
                height: "20px",
              }}
              src={Login}
              alt="login"
            />
          </button>
          <span
            style={{
              fontSize: "15px",
              fontFamily: "Kumbh Sans",
            }}
          >
            Login
          </span>
        </div>
      )}
    </div>
  );
}
