import React, { Component } from 'react';
import MarkdownRenderer from 'react-markdown-renderer';


class TextBlogTitle extends Component {

    render() {
        const body = this.props.body;
        const textShow = body.split(' ', 15).join(' ');

        return <MarkdownRenderer markdown={textShow} />

    }
}

export default TextBlogTitle;

