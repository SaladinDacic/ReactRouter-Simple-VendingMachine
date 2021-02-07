import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./FreshSardines.css";
export default class FreshSardines extends Component {
    render() {
        return (
            <div className="Sardines-body">
                <div className="Sardines-box">
                    <h1>ja sam Sardina</h1>
                    <Link className="link" to="/">Go back to home page</Link>
                </div>
            </div>
        )
    }
}
