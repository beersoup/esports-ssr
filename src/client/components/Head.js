import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Head extends Component {
    render() {
        return (
            <div id="slidepanel-1" className="slidepanel">
                <div className="container-fluid no-right-padding no-left-padding top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <ul className="top-social">
                                </ul>
                            </div>
                            <div className="col-lg-4 logo-block">
                                <Link to="/" title="Logo">
                                    <img src="img/logo.png" alt="Logo EsportsWire" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Head;
