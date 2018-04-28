import React, { Component } from 'react';



class CallActionButton extends Component {
    render() {
        return (
            <p className="lead" style={{ marginTop: '20px' }}>
                <a className={this.props.className}
                   href={this.props.href}
                   target="_blank"
                   role="button"
                   rel="noopener noreferrer"
                   title="Call For Action Button"
                   style={{ fontWeight: "600", borderRadius: "2rem"}}
                >{this.props.buttonText.toUpperCase()}</a>
            </p>

        );
    }
}

export default CallActionButton;
