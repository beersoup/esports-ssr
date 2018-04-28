import React, { Component } from 'react';



class RenderImage extends Component {

    render() {

        return (
            <img src={this.props.src} alt={this.props.alt} className={this.props.imgClass}
                 width={this.props.imgWidth}
                height={this.props.imgHeight}/>
        );
    }
}

export default RenderImage;

