import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pagination extends Component {

    renderPageNumber() {

        let pageRender = [];

        for(var i = 1; i <= this.props.pageCount; i++) {

          let classActive;
          if(this.props.pageNoState == i) {
              classActive = this.props.classNameActive
          }else if(this.props.location === '/' && i === 1) {
              classActive = this.props.classNameActiveFirst
          }
          else {
              classActive = ''
          }

            const linkPage = i <= 1 ? `/pages/?pageNo=1&size=9&total=${this.props.total}` :
                `/pages/?pageNo=${i}&size=9&total=${this.props.total}`
            pageRender.push(<li key={i} className={`page-item ${classActive}`}><Link className="page-link" target="_self" to={linkPage}>{i}</Link></li>)
        }
        return pageRender;
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