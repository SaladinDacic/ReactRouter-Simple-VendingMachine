import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Chips.css";

export default class Chips extends Component {
    constructor(props){
        super(props);
        this.state = {
            chipsImg : []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let rando1 = Math.floor((Math.random()-0.5)*200);
        let rando2 = Math.floor((Math.random()-0.5)*200);
        let rando3 = Math.floor((Math.random())*365);
        let rando4 = Math.floor((Math.random())*120);
        this.setState({chipsImg: [...this.state.chipsImg, {rando1, rando2, rando3, rando4}]})
    }
    render() {
        let chipsToShow;
        if(this.state.chipsImg.length !== 0){
            chipsToShow = this.state.chipsImg.map((val,i)=>{
                return <img style={{transform: `rotate(${val.rando3}deg) translate(${val.rando1}px, ${val.rando2}px)`, marginLeft: `${val.rando4}em`}}
                src="https://www.barrelofunsnacks.com/thumbnails/userfiles/files/3D-LOF-BOF-8oz-Original-Plain-flat-chips%281969%29_400x578.png" 
                key={i}
                />
            })
        }
  
        return (
            <div className="Chips-body">
                <div className="Chips-c">
                    {this.state.chipsImg.length !== 0 && chipsToShow}
                </div>
                <div className="Chips-box">
                    <h2>Bags Eaten {this.state.chipsImg.length}</h2>
                    <button onClick={this.handleClick}>More Chips</button>
                    <Link to="/">Go Back!!</Link>
                </div>
            </div>
        )
    }
}

