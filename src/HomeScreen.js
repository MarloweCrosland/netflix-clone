import Banner from "./Banner.js";
import React, { Component } from "react";
import Row from "./Row.js";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Requests.js";

export class HomeScreen extends Component {
  render() {
    return (
      <div className="homeScreen">
        <Nav />

        <Banner />
        {/* passing in our props to the rows here */}
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          isLargeRow
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
    );
  }
}

export default HomeScreen;
