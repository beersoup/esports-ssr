import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    renderSubmenu() {
        let categoryNotDupArr = [];

        for (var i = 0; i < this.props.fetchCategories.length; i++) {
            if (this.props.fetchCategories.indexOf(this.props.fetchCategories[i]) !== i &&
                this.props.fetchCategories.indexOf(this.props.fetchCategories[i]) !== -1) {

            } else {
                categoryNotDupArr.push(this.props.fetchCategories[i])
            }
        }

        let result  = []
        categoryNotDupArr.map((category, i) => {

            if(category != null || category != undefined) {
                let categorySlug = category.toLocaleLowerCase()
                categorySlug = categorySlug.split(' ').join('-')
                return result.push(<Link key={i} to={`/category/${categorySlug}`} className="dropdown-item">{category}
                </Link>)
            }else {
                return result.push(<div key={i} style={{ display:'none'}}/>)
            }
        })

        return result

    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">ESPORTSWIRE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Posts
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {this.renderSubmenu()}
                                <Link to={`/category/others`} className="dropdown-item">Others</Link>
                            </div>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>
         );
    }
}

export default Nav;