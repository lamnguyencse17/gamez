import React, { Component } from 'react'
import FeatureNews from './Landing/FeatureNews'
import SideNews from './Landing/SideNews'

export default class Landing extends Component {
    render() {
        return (
            <div className="container mx-auto mt-10">
                <div className="md:grid md:grid-cols-5 md:gap-4">
                    <div className="md:col-span-3">
                        <FeatureNews/>
                    </div>
                    <div className="md:col-span-2">
                        <SideNews/>
                    </div>
                </div>


            </div>
        )
    }
}