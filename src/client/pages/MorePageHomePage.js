import React, { Component } from 'react';


class MorePageHomePage extends Component {

    render() {

        console.log('More', this.props.match.params.page == undefined)
        return (
            <div>More</div>
        );

    }
}

export default MorePageHomePage;