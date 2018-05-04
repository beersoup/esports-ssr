import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pagination extends Component {

    renderPageNumber() {

        let pageRender = [];

        for(var i = 1; i <= this.props.pageCount; i++) {
            const classActive =  this.props.paramsPage == undefined && i == 1 || this.props.paramsPage == i
                ? 'page-item active disabled'
                :  'page-item'; // (this.props.paramsPage == undefined) = If its route is '/'
            const linkToHomePage = i <= 1 ? '/' : `/page/${i}`
            pageRender.push(<li key={i} className={classActive}><Link className="page-link" to={linkToHomePage}>{i}</Link></li>)
        }
        return pageRender;
    }

    handlePageClick(){
    }

    render() {

        return (
            <nav aria-label="EsportsWire Blog Pagination">
                <ul className="pagination pagination-lg">
                    {this.renderPageNumber()}
                </ul>
            </nav>
        );

    }
}

export default Pagination;