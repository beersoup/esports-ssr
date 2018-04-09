import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { Helmet } from 'react-helmet';

class BlogPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map((user) => {
            if(this.props.match.params.id == user.id) {
                return <li key={user.id}>{user.name}</li>
            }
        })
    }

    head() {
        return (
            <Helmet>
                <title>{`Blog Page ${this.props.match.params.id}`}</title>
                <meta property="og:title" content="Blog" />
            </Helmet>
        );
    }
    render () {
        return (
            <div>
                {this.head()}
                Here's a Blog Page
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData: loadData,
    component: connect(mapStateToProps, { fetchUsers })(BlogPage)
}