import React from "react";
import ButtonTemplate from "../Templates/buttonTemplate";
import "./menuButton.css"
export default class MenuButton extends React.Component{
    
    render(){
        return(
            <ButtonTemplate className="open-close-menu-btn" onClickFunc={this.props.onClick}>
                <div className = {this.props.isOpen ? "first-line open" : "first-line"}/>
                <div className = {this.props.isOpen ? "second-line open" : "second-line"}/>
            </ButtonTemplate>
        )
    }
}