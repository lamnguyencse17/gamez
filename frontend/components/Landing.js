import React, { Component } from "react";
import FeatureNews from "./Landing/FeatureNews";
import SideNews from "./Landing/SideNews";
import LatestNews from "./Landing/LatestNews";
import NavigateButton from "./Landing/NavigateButton";

export default class Landing extends Component {
  render() {
    return (
      <div className="container mx-auto mt-10">
        <div className="md:grid md:grid-cols-5 md:gap-4">
          <div className="md:col-span-3">
            <FeatureNews />
            <div className="mt-5 font-bold lg:text-xl md:text-sm">
              Latest Articles
            </div>
            <LatestNews latestNews={this.props.latestNews} />
          </div>
          <div className="md:col-span-2">
            <div className="mb-2 font-bold lg:text-xl md:text-sm">
              Articles you may like
            </div>
            <SideNews />
          </div>
        </div>
        <NavigateButton />
      </div>
    );
  }
}
