import React, { Component } from 'react';
import "./VendingMachine.css"
import {Link} from "react-router-dom";


export default class VendingMachine extends Component {
    render() {
        return (
            <div className="vm-body">
                <div className="vm-div vm-left-div">
                    <h2>
                        Hello I am vending machine, what would you like to eat
                    </h2>
                </div>
                <div className="vm-div vm-right-div">
                    <Link className="vml" exact to="/soda">Soda</Link>
                    <Link className="vml" exact to="/chips">Chips</Link>
                    <Link className="vml" exact to="/freshsardines">Fresh Sardines</Link>
                </div>
            </div>
        )
    }
}
