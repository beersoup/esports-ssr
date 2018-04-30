import React, { Component } from 'react';

import { TRACK_URL } from '../config';

const bannerUrl1 = '/img/2_eoru_free_1135.jpg';
const bannerUrl991 = '/img/2_euro_free_991_90.jpg';
const bannerUrl600 = '/img/2_euro_free_600_100.jpg';

class ImageDynamic2 extends Component {

    render() {
        return (
            <div className="container-fluid no-left-padding no-right-padding slider-section slider-section7">
                <div className="container m-t-20">
                    <div className="slider-carousel slider-carousel-7 center">
                        <div className="item">
                            <div className="top-image-wide">
                                <a href={TRACK_URL} target="_blank" rel="noopener noreferrer">
                                    <picture>
                                        <source media="(min-width: 992px)" srcSet={bannerUrl1} />
                                        <source media="(min-width: 600px)" srcSet={bannerUrl991} />
                                        <img src={bannerUrl600} alt="2_euro_free" className="img-slide dynamic-img" />
                                    </picture></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageDynamic2;
