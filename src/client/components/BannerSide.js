import React, { Component } from 'react';


import { TRACK_URL } from '../config';


class BannerSide extends Component {
    render() {
        return (
            <aside className="widget widget_aboutme">
                <div className="about-info">
                    <a href={TRACK_URL} target="_blank" rel="noopener noreferrer"><img src={this.props.imageUrl}
                         alt="pixel-bet game master"/></a>
                </div>
            </aside>
        );
    }
}

export default BannerSide;