import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Nav from './components/Nav';
import Footer from './components/Footer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBlogs } from './actions/index';

class App extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
    }


    render() {
        return (
            <div className="App">
                <header className="container-fluid no-left-padding no-right-padding header_s header-fix header_s1">
                    <Nav fetchCategories={this.props.state.fetchCategories}/>
                </header>
                <div>{renderRoutes(this.props.route.routes)}</div>
                <Footer />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchBlogs:fetchBlogs
    }, dispatch)
}

function loadData(store) {
    return store.dispatch(fetchBlogs());
}
export default {
    component: connect(mapStateToProps, mapDispatchToProps)(App),
    loadData: loadData
};