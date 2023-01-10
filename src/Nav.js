import React from "react";
import "./Nav.css";
import { useState, useEffect } from 'react';

function Nav() {
const [show, handleshow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleshow(true);
    } else {
        handleshow(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', transitionNavBar); 
    // we clean it up and remove after for best practice
    return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    //   only render the nav_black class if show is true
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Nav;
