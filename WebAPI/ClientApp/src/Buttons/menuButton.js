import React from "react";
import "./menuButton.css"
export default class MenuButton extends React.Component{
    render(){
        return(
            <button className="open-close-menu-btn" onClick={this.props.onClick}>
                <div className="btn-icon">

                </div>
            </button>
        )
    }
}