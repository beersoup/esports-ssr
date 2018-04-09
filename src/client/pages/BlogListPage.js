import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchUsers } from "../actions";
import { Link } from 'react-router-dom';



class BlogListPage extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            const blogSlug = `/blog/${user.id}`
            return <li key={user.id}>
                <Link to={blogSlug}>{user.name}</Link>
            </li>;
        })
    }
    render() {

        return (
            <div>
                <h3>Blog List Page</h3>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };

}

export default {
    component: connect(mapStateToProps, { fetchUsers })(BlogListPage),
    loadData: ({ dispatch }) => dispatch(fetchUsers())
};