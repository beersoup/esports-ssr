import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CategorySide extends Component {

    renderCategorySide() {

        let result  = []
        this.props.fetchCategories.map((category, i) => {
            if(category != null || category != undefined) {
                let categorySlug = category.toLocaleLowerCase()
                categorySlug = categorySlug.split(' ').join('-')
                return result.push(<Link key={i} to={`/category/${categorySlug}`}>
                    <li className="category-tab-list">{category}</li>
                </Link>)
            }else {
                return result.push(<div key={i} style={{ display:'none' }}/>)
            }
        })

        return result
    }

    render() {

        return (
            <aside className="widget widget_categories text-center">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    {this.renderCategorySide()}
                    <Link to={`/category/others`}><li className="category-tab-list">OTHERS</li></Link>
                </ul>
            </aside>
        )

    }
}

export default CategorySide;

