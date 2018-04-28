import React, { Component } from 'react';
import RenderImage from './RenderImage';



class FetchBlogsImages extends Component {

    render() {

        return (
            <div>
                {this.props.fetchBlogsImages.map((asset, i) => {
                    if(this.props.imageId === asset.sys.id) {
                        return <RenderImage key={i}
                                            src={asset.fields.file.url}
                                            alt={this.props.alt}
                                            imgClass={this.props.imgClass}
                                            imgWidth={this.props.imgWidth}
                                            imgHeight={this.props.imgHeight}/>
                    } else {
                        return <div key={i}/>
                    }
                })}
            </div>
        );
    }
}

export default FetchBlogsImages;

