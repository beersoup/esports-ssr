import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions';
import { Helmet } from 'react-helmet';
import MarkdownRenderer from 'react-markdown-renderer';
import moment from 'moment';
import PostSide from '../components/PostSide';
import CategorySide from '../components/CategorySide';
import FetchBlogsImages from '../components/FetchBlogsImages';


class BlogDetailPage extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
        window.scrollTo(0, 0)
    }

    renderBlogDetail() {
        return this.props.fetchBlogsDetails.map((blog, i) => {
            const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")
            if(this.props.match.params.slug == blog.fields.slug) {
                if(blog.fields.hasOwnProperty('featuredImage')) {
                    const imageId = blog.fields.featuredImage.sys.id;
                    return <article key={i} className="type-post">
                                <div className="entry-cover">
                                    <FetchBlogsImages fetchBlogsImages={this.props.fetchBlogsImages}
                                                  imageId={imageId}
                                                  alt={blog.fields.title}
                                    />
                                </div>
                                <div className="entry-content">
                                    <div className="entry-header">
                                        <span className="post-category">{blog.fields.category}</span>
                                        <h3 className="entry-title">{blog.fields.title}</h3>
                                        <div className="post-meta">
                                            <span className="byline">by <span>{blog.fields.author}</span></span>
                                            <span className="post-date"> {dateCreated}</span>
                                        </div>
                                    </div>
                                    <MarkdownRenderer markdown={blog.fields.body} />
                                </div>
                        </article>
                }
            }
        })
    }

    head() {
        return this.props.fetchBlogsDetails.map((blog, i) => {
            if(this.props.match.params.slug == blog.fields.slug) {
                return (
                    <Helmet key={i}>
                        <title>{blog.fields.title}</title>
                        <meta property="og:title" content="ESportsWire.net" />
                    </Helmet>
                );
            }

        })

    }

    render () {
        return (
            <div>
                {this.head()}
                <div className="main-container">
                    <main className="site-main">
                        <div className="container-fluid no-left-padding no-right-padding page-content blog-single padding-page-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-6 col-12 content-area">
                                        {this.renderBlogDetail()}
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 widget-area">
                                        <PostSide postSlug={this.props.match.params.slug}
                                                  fetchBlogsDetails={this.props.fetchBlogsDetails}
                                                  fetchBlogsImages={this.props.fetchBlogsImages}/>
                                        <CategorySide fetchCategories={this.props.fetchCategories}/>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 widget-area">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { fetchBlogsDetails: state.fetchBlogsDetails,
        fetchBlogsImages: state.fetchBlogsImages,
        fetchCategories: state.fetchCategories
    };
}

function loadData(store) {
    return store.dispatch(fetchBlogs());
}

export default {
    loadData: loadData,
    component: connect(mapStateToProps, { fetchBlogs })(BlogDetailPage)
}