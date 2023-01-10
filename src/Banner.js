import React from "react";
import "./Banner.css";

function Banner() {

        function truncate(string, n) {
            return string?.length > n ? string.substr(0, n - 1) + '...': string
        }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://pixy.org/src/49/491517.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(`This is a test description`, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
