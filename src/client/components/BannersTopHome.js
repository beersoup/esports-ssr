import React, { Component } from 'react';
import CallActionButton from './CallActionButton';

import {TRACK_URL} from '../config';

class BannersTopHome extends Component {
    render() {
        let bannerButton1, bannerText1, bannerTitle1, imageId1
        let bannerButton2, bannerText2, bannerTitle2, imageId2
        let bannerButton3, bannerText3, bannerTitle3, imageId3
        let bannerImageUrl1, bannerImageUrl2, bannerImageUrl3
        if(this.props.fetchHeroBanner.items !== undefined){
            bannerButton1 = this.props.fetchHeroBanner.items[0].fields.button
            bannerText1 = this.props.fetchHeroBanner.items[0].fields.text
            bannerTitle1 = this.props.fetchHeroBanner.items[0].fields.title
            imageId1 = this.props.fetchHeroBanner.items[0].fields.image.sys.id

            bannerButton2 = this.props.fetchHeroBanner.items[1].fields.button
            bannerText2 = this.props.fetchHeroBanner.items[1].fields.text
            bannerTitle2 = this.props.fetchHeroBanner.items[1].fields.title
            imageId2 = this.props.fetchHeroBanner.items[1].fields.image.sys.id

            bannerButton3 = this.props.fetchHeroBanner.items[2].fields.button
            bannerText3 = this.props.fetchHeroBanner.items[2].fields.text
            bannerTitle3 = this.props.fetchHeroBanner.items[2].fields.title
            imageId3 = this.props.fetchHeroBanner.items[2].fields.image.sys.id
        }else{
            return <div />
        }
        if(this.props.fetchHeroBanner.includes.Asset !== undefined) {
            this.props.fetchHeroBanner.includes.Asset.map((asset) => {
                if(asset.sys.id === imageId1) bannerImageUrl1 = asset.fields.file.url
                if(asset.sys.id === imageId2) bannerImageUrl2 = asset.fields.file.url
                if(asset.sys.id === imageId3) bannerImageUrl3 = asset.fields.file.url
                return <div />
            })
        }
        return (
            <div className="container-fluid no-left-padding no-right-padding slider-section slider-section2"
            style={{ paddingTop: 0 }}>
                <div className="container banner-big" style={{ margin: 0, padding: 0 }}>
                    <div id="slider-carousel-2" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-8 col-sm-12 post-block post-big">
                                        <div className="post-box">
                                            <a href={TRACK_URL} target="_blank"
                                               rel="noopener noreferrer"
                                               title={bannerTitle2}
                                            className="link-banner-filter">
                                                <img src={bannerImageUrl2} className="banner1" alt="Slide" />
                                            </a>
                                            <div className="entry-content">
                                                <span className="post-category"><a href={TRACK_URL} target="_blank"
                                                                                   rel="noopener noreferrer"
                                                                                   title={bannerTitle2}>{bannerTitle2}</a>
                                                </span>
                                                <h3><a href={TRACK_URL}
                                                       target="_blank" rel="noopener noreferrer"
                                                       title={bannerTitle2}>{bannerText2}</a>
                                                </h3>
                                                <CallActionButton
                                                    href={TRACK_URL}
                                                   className="btn btn-warning"
                                                    buttonText={bannerButton2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 post-block post-thumb">
                                        <div className="post-box">
                                            <a href={TRACK_URL}
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               title={bannerTitle1}><img src={bannerImageUrl1} className="banner2" alt="Slide" /></a>
                                            <div className="entry-content">
                                                <span className="post-category"><a href={TRACK_URL}
                                                                                   target="_blank"
                                                                                   rel="noopener noreferrer"
                                                                                   title={bannerTitle1}>{bannerTitle1}</a></span>
                                                <h3><a href={TRACK_URL} target="_blank"
                                                       rel="noopener noreferrer"
                                                       title={bannerTitle1}>{bannerText1}</a></h3>
                                                <CallActionButton
                                                    href={TRACK_URL}
                                                    className="btn btn-warning"
                                                    buttonText={bannerButton1} />
                                            </div>
                                        </div>
                                        <div className="post-box">
                                            <a href={TRACK_URL} target="_blank"
                                               rel="noopener noreferrer"
                                               title={bannerTitle3}
                                               className="link-banner-filter"><img src={bannerImageUrl3} className="banner3" alt="Slide" /></a>
                                            <div className="entry-content">
                                                <span className="post-category"><a href={TRACK_URL} target="_blank"
                                                                                   rel="noopener noreferrer"
                                                                                   title={bannerTitle3}>{bannerTitle3}</a></span>
                                                <h3><a href={TRACK_URL}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       title={bannerTitle3}>{bannerText3}</a></h3>
                                                <CallActionButton
                                                    href={TRACK_URL}
                                                    className="btn btn-warning"
                                                    buttonText={bannerButton3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannersTopHome
