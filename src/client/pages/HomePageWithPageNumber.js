import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchHeroBanner, fetchBlogs, fetchBlogsLimit } from "../actions";
import moment from "moment/moment";
import { Link } from 'react-router-dom';
import FetchBlogsImages from '../components/FetchBlogsImages';
import TextBlogTitle from "../components/TextBlogTitle";
import ImageDynamic3 from '../components/ImageDynamic3';
import BannersTopHome from '../components/BannersTopHome';
import Pagination from '../components/Pagination';
import queryString from "query-string";


const limitPostForOnePage = 9;

class HomePageWithPageNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            classNameActive: '',
            pageNoState: ''
        }
    }

    componentDidMount() {
        this.props.fetchBlogs();
        this.props.fetchHeroBanner();
        window.scroll(0,1);
        const pageNoQuery = this.getQueryString('pageNo')
        const sizeQuery = this.getQueryString('size')
        const total = this.props.state.fetchBlogsDetails.length
        this.props.fetchBlogsLimit(pageNoQuery, sizeQuery, total)
        this.setState({ classNameActive: 'active disabled', pageNoState: pageNoQuery});
    }
    getQueryString ( field ) {
        const reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        const queryStrings = this.props.location.search
        const string = reg.exec(queryStrings);
        return string ? string[1] : null;
    }

    renderBlogItem() {
        if(this.props.state.fetchBlogsDetailsLimit !== undefined) {
            return this.props.state.fetchBlogsDetailsLimit.map((blog, i) => {

                if(blog.sys.contentType.sys.id === "article") {
                    if(blog.fields.hasOwnProperty('featuredImage')) {
                        const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")
                        const slugPost = `/post/${blog.fields.slug}`
                        const imageId = blog.fields.featuredImage.sys.id;
                        const body = blog.fields.body;
                        let category = blog.fields.category ? blog.fields.category : 'OTHERS'
                        category = category.toUpperCase();
                        let categorySlug = blog.fields.category ? blog.fields.category : 'others'
                        categorySlug = categorySlug.toLocaleLowerCase()
                        categorySlug = categorySlug.split(' ').join('-')

                        return <div key={i} className="col-lg-4 col-md-6 col-sm-6 post-list">
                            <div className="type-post">
                                <div className="entry-cover post-list-horizontal">
                                    <div className="post-meta">
                                        <span className="byline">by <Link to="/">{blog.fields.author}&nbsp;&nbsp;</Link></span>
                                        <span className="post-date" style={{ display:'block', float:'left'}}><Link to="/" style={{ display:'block'}}>{dateCreated}</Link></span>
                                    </div>
                                    <Link className="link-post-img" to={slugPost}><FetchBlogsImages fetchBlogsImages={this.props.state.fetchBlogsImagesLimit}
                                                                                                    imageId={imageId}
                                                                                                    alt={blog.fields.title}
                                    /></Link>

                                    <Link to={`/category/${categorySlug}`} className="link-category-post"><span className="post-category">{category}</span></Link>
                                    <Link to={slugPost} className="entry-content post-home">
                                        <div className="entry-header">
                                            <h3 className="entry-title"><div title="Blog Title">{blog.fields.title}</div></h3>
                                        </div>
                                        <TextBlogTitle body={body} />
                                        <div className="link-read-more">READ MORE</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                }else {
                    return <span key={i} />
                }

            })
        }else {
            return <div>Loading...</div>
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
                                    {this.renderBlogItem()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid no-padding page-content" style={{ marginBottom: '2rem' }}>
                    <Pagination pageCount={pageCount}
                                pageNoQuery={this.getQueryString('pageNo')}
                                total={this.props.state.fetchBlogsDetails.length}
                                classNameActive={this.state.classNameActive}
                                pageNoState={this.state.pageNoState}
                    />
                </div>
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
        fetchBlogs: fetchBlogs,
        fetchBlogsLimit: fetchBlogsLimit
    }, dispatch)
}

function loadData(store, match, query) {
    return Promise.all([
        store.dispatch( fetchBlogsLimit(query.skip, query.limit, query.total) ),
        store.dispatch( fetchBlogs() ),
        store.dispatch( fetchHeroBanner() )
    ]);
}
export default {
    component: connect(mapStateToProps, mapDispatchToProps)(HomePageWithPageNumber),
    loadData: loadData
};