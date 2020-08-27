import React, { Component } from "react";
import Navbar from "./Common/Navbar";
import Landing from "./Landing";

export default class Index extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landing latestNews={this.props.articles} />
      </>
    );
  }
}
