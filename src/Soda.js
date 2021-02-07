import React, { Component } from 'react';
import './Soda.css'
import {Link} from "react-router-dom";

export default class Soda extends Component {
    render() {
        return (
            <div className="soda-body">
                <img src="https://www.thepizzaroom.co.uk/wp-content/uploads/2020/04/products_drinks_soft_coca-cola.png"/>
                <div className="soda-box">
                    Omg Suggarrrrrr!!!
                    <Link to="/">Go back</Link>
                </div>
                <img src="https://www.thepizzaroom.co.uk/wp-content/uploads/2020/04/products_drinks_soft_coca-cola.png"/>
            </div>
        )
    }
}
