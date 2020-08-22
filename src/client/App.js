import React, { Component } from "react";
import '../styles.css';
import Navbar from "./Common/Navbar";
import Landing from "./Landing";

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Landing/>
      </>
    );
  }
}
