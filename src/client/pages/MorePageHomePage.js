import React, { Component } from 'react';


class MorePageHomePage extends Component {

    render() {

        console.log('More', this.props.match.params.page)
        return (
            <div>More</div>
        );

    }
}

export default MorePageHomePage;