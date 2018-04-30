import React, { Component } from 'react';



class FetchBlogsImages extends Component {

    render() {

        return (
            <div>
                {this.props.fetchBlogsImages.map((asset, i) => {
                    if(this.props.imageId === asset.sys.id) {
                        return <img key={i}
                                            src={asset.fields.file.url}
                                            alt={this.props.alt}
                                            className={this.props.imgClass}
                                            width={this.props.imgWidth}
                                            height={this.props.imgHeight} />
                    } else {
                        return <div key={i}/>
                    }
                })}
            </div>
        );
    }
}

export default FetchBlogsImages;

