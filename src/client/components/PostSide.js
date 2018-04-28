import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FetchBlogsImages from '../components/FetchBlogsImages';


class PostSide extends Component {

    renderImagePostSide(imageId, title, slug) {
            return this.props.fetchBlogsImages.map((asset, i) => {
                const slugPost =  `/post/${slug}`
                if(imageId === asset.sys.id) {
                    return <Link key={i} to={slugPost} title="Popular Posts" className="link-to-post">
                        <i><img src={asset.fields.file.url}
                                className="wp-post-image" alt={title}
                                width="100" height="80" /></i>
                        </Link>
                }else {
                    return <div key={i} />
                }

            })
    }
    renderPostSide() {

        return this.props.fetchBlogsDetails.map((blog, i) => {
             if(blog.sys.contentType.sys.id === "article" && blog.fields.slug !== this.props.postSlug) {
                const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")
                const slugPost =  `/post/${blog.fields.slug}`
                 const category = blog.fields.category ? blog.fields.category : 'OTHERS'
                 let categorySlug = blog.fields.category ? blog.fields.category : 'others'
                 categorySlug = categorySlug.toLocaleLowerCase()
                 categorySlug = categorySlug.split(' ').join('-')

                if(i < 4) {
                    if(blog.fields.hasOwnProperty('featuredImage')) {
                        return <div key={i} className="latest-content">
                            <Link to={slugPost} title="Popular Posts" className="link-to-post">
                                <i><FetchBlogsImages imageId={blog.fields.featuredImage.sys.id}
                                                  alt={blog.fields.title}
                                                  fetchBlogsImages={this.props.fetchBlogsImages}
                                                  imgClass="wp-post-image"
                                                     imgWidth="100"
                                                     imgHeight="80"
                                /></i>
                            </Link>
                            <h5><Link to={slugPost}>{blog.fields.title}</Link></h5>
                            <Link to={`/category/${categorySlug}`}><span className="popular-post-category">{category}</span></Link>
                            <span><Link to={slugPost}>{dateCreated}</Link></span>
                        </div>
                    }

                }else {
                    return <div key={i} />
                }
            }else {
                return <span key={i} />
            }
        })

    }

    render() {
        return (
            <aside className="widget widget_latestposts">
                <h3 className="widget-title">Popular Posts</h3>
                {this.renderPostSide()}
            </aside>
        )

    }
}

export default PostSide;

