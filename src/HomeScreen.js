import Banner from "./Banner.js"
import React, { Component } from 'react'
import "./HomeScreen.css";
import Nav from "./Nav";

export class HomeScreen extends Component {
  render() {
    return (
      <div className ="homeScreen">

      <Nav />

      <Banner />

      {/* Row */}
      
      </div>
    )
  }
}

export default HomeScreen