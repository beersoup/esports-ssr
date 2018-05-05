import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions';
import { Helmet } from 'react-helmet';
import MarkdownRenderer from 'react-markdown-renderer';
import moment from 'moment';
import PostSide from '../components/PostSide';
import CategorySide from '../components/CategorySide';
import FetchBlogsImages from '../components/FetchBlogsImages';
import ImageDynamic2 from '../components/ImageDynamic2';
import BannerSide from '../components/BannerSide';
import ImageDynamic3 from '../components/ImageDynamic3';


const bannerUrl2 = '/img/game_master_345.jpg';
const bannerUrl3 = '/img/2_eoru_free_345.jpg';
const bannerUrl4 = '/img/master-game-336.jpg';



class BlogDetailPage extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
        if(typeof window !== 'undefined') {
            const ReallySmoothScroll = require('really-smooth-scroll');
            ReallySmoothScroll.shim()
        }
        window.scrollTo(0,0)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            if(typeof window !== 'undefined') {
                const ReallySmoothScroll = require('really-smooth-scroll');
                ReallySmoothScroll.shim()
            }
            window.scrollTo(0,0)
        }
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
                                    <div className="entry-header" style={{ textAlign:'left', marginBottom:'2rem'}}>
                                        <span className="post-category">{blog.fields.category}</span>
                                        <h3 className="entry-title"
                                        style={{ fontSize: '2.5rem', padding:0, margin:0, textAlign:'left' }}>{blog.fields.title}</h3>
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
                        <ImageDynamic2 />
                        <div className="container-fluid no-left-padding no-right-padding page-content blog-single padding-page-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-6 col-12 content-area md-responsive">
                                        {this.renderBlogDetail()}
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 widget-area">
                                        <BannerSide imageUrl={bannerUrl2} />
                                        <PostSide postSlug={this.props.match.params.slug}
                                                  fetchBlogsDetails={this.props.fetchBlogsDetails}
                                                  fetchBlogsImages={this.props.fetchBlogsImages}/>
                                        <BannerSide imageUrl={bannerUrl3} />
                                        <CategorySide fetchCategories={this.props.fetchCategories}/>
                                        <BannerSide imageUrl={bannerUrl4} />
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 widget-area">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <ImageDynamic3 />
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