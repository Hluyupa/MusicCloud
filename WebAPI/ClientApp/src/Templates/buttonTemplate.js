import React from "react";
import  ReactDOM  from "react-dom";
import './buttonTemplate.css'
export default class ButtonTemplate extends React.Component{
    render(){
        return(
            <button className={this.props.className} onClick={this.props.onClickFunc}>
                <div className="btn-icon">
                    {this.props.children}
                </div>
            </button>
        );
    }
}