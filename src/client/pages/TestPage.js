import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchHeroBanner, fetchBlogs, fetchBlogsLimit } from "../actions";
import moment from "moment/moment";
import { Link } from 'react-router-dom';
import FetchBlogsImages from '../components/FetchBlogsImages';
import TextBlogTitle from "../components/TextBlogTitle";
import ImageDynamic3 from '../components/ImageDynamic3';
import LoadMoreButton from '../components/LoadMoreButton';
import BannersTopHome from '../components/BannersTopHome';
import Pagination from '../components/Pagination';




const limitPostForOnePage = 9;


class TestPage extends Component {


    componentDidMount() {
        this.props.fetchBlogsLimit()
        this.props.fetchHeroBanner()

    }

    renderBlogLimit() {
        if(this.props.state.fetchBlogsDetailsLimit !== undefined) {
            return this.props.state.fetchBlogsDetailsLimit.map((limit, i) => {
                if(limit.sys.contentType.sys.id === "article") {
                    return <div key={i}>{limit.sys.createdAt}</div>
                }

            })
        }else {
            return <div>Loading</div>
        }

    }
    render() {

        let pageCount;
        if(this.props.state.fetchBlogsDetails.length !== undefined) {
            pageCount = Math.ceil(this.props.state.fetchBlogsDetails.length / limitPostForOnePage);
        }

        return (
            <div className="container-fluid no-left-padding no-right-padding">
                <BannersTopHome fetchHeroBanner={this.props.state.fetchHeroBanner} />
                <div className="container-fluid no-left-padding no-right-padding page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 content-area">
                                <div className="row post-list-wrapper">
                                    TEST TEST
                                    {this.renderBlogLimit()}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid no-padding page-content" style={{ marginBottom: '2rem' }}>
                    <Pagination pageCount={pageCount} paramsPage={this.props.match.params.page}/>
                </div>
                <LoadMoreButton handleClickLoadMoreButton={this.handleClickLoadMoreButton}/>
                <ImageDynamic3 />
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
        fetchHeroBanner:fetchHeroBanner,
        fetchBlogsLimit: fetchBlogsLimit

    }, dispatch)
}

function loadData(store) {
    return Promise.all([
        store.dispatch( fetchBlogsLimit() ),
        store.dispatch( fetchHeroBanner() ),
    ]);
}


export default {
    component: connect(mapStateToProps, mapDispatchToProps)(TestPage),
    loadData: loadData,
};