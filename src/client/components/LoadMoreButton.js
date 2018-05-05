import React, { Component } from 'react';



class LoadMoreButton extends Component {

    render() {

        return (
            <div className="load-more-btn">
                <span className="btn-pos" onClick={this.props.handleClickLoadMoreButton}>
                    <span>LOAD MORE ARTICLES</span>
                </span>

            </div>
        );
    }
}

export default LoadMoreButton;