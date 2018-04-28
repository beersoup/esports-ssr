import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions';
import moment from 'moment';

import { Link, Redirect } from 'react-router-dom';
import FetchBlogsImages from '../components/FetchBlogsImages';
import MarkdownRenderer from 'react-markdown-renderer';
import PostSide from '../components/PostSide';
import CategorySide from '../components/CategorySide';
import NotFoundPage from "./NotFoundPage";



class CategoryPage extends Component {
    componentDidMount() {
        this.props.fetchBlogs()
        window.scrollTo(0, 0)
    }
    renderCategoryPost(body, slugPost, key, imageId, alt, fetchBlogsImages, title, category = 'OTHERS', author, dateCreated) {
        const textShow = body.split(' ', 15).join(' ');
        return <div key={key} className="about-author-box category-block">
            <div className="author category-page">
                <i className="entry-cover category-page">
                    <Link to={slugPost}>
                        <FetchBlogsImages imageId={imageId}
                                          alt={alt}
                                          fetchBlogsImages={fetchBlogsImages}
                                          imgClass="img-category"
                        />
                    </Link>
                </i>

                <h4><Link to={slugPost} style={{ color:'#151515'}}>{title}</Link></h4>

                <p className="post-category category-title-list">{category}</p>
                <MarkdownRenderer markdown={textShow} />
                <div className="link-read-more">
                    <span className="byline">by <span>{author} /</span></span>
                    <span className="post-date"> {dateCreated}</span>
                    <Link to={slugPost} className="read-more-category-page">READ MORE</Link>
                </div>
            </div>
        </div>
    }

    renderBlogDetail() {
        const categorySlug = this.props.match.params.category

        if(this.props.fetchBlogsDetails){
            return this.props.fetchBlogsDetails.map((blog, i) => {
                const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")

                if(blog.fields.category) {
                    let categoryLowerCase = blog.fields.category.toLowerCase()
                    categoryLowerCase = categoryLowerCase.split(' ').join('-')

                    if(categorySlug === categoryLowerCase) {
                        return this.renderCategoryPost(blog.fields.body,
                            `/post/${blog.fields.slug}`,
                            i,
                            blog.fields.featuredImage.sys.id,
                            blog.fields.title,
                            this.props.fetchBlogsImages,
                            blog.fields.title,
                            blog.fields.category,
                            blog.fields.author,
                            dateCreated
                            )}

                }

                if(blog.fields.category === undefined && categorySlug === 'others') {
                    return this.renderCategoryPost(blog.fields.body,
                        `/post/${blog.fields.slug}`,
                        i,
                        blog.fields.featuredImage.sys.id,
                        blog.fields.title,
                        this.props.fetchBlogsImages,
                        blog.fields.title,
                        blog.fields.category,
                        blog.fields.author,
                        dateCreated
                    )}

            })
        }

    }

    render() {
        return (
            <div className="main-container">
                <main className="site-main">
                    <div className="container-fluid no-left-padding no-right-padding page-content blog-single">
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
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )

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
    component: connect(mapStateToProps, { fetchBlogs })(CategoryPage)
}

