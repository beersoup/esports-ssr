import React, { Component } from 'react';




class BannerTop extends Component {
    render() {
        return (
            <div className="container-fluid no-left-padding no-right-padding slider-section slider-section7">
                <div className="slider-carousel slider-carousel-7 center">
                    <div className="item" style={{ paddingLeft:0, paddingRight:0}}>
                        <div className="post-box">
                            <img src={this.props.imageBg} alt="EsportsWire Category" className="img-slide" />
                            <div className="entry-content">
                                <h3 style={{ color: '#fff'}}>{this.props.titleSec2}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerTop;