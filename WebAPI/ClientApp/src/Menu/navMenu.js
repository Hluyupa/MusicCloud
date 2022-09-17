import React from "react";
import ReactDOM from "react-dom";
import MenuButton from "./menuButton.js";
import './navMenu.css'

export default class NavMenu extends React.Component{

    constructor(props){
        super(props);
        this.state={
            menuIsOpen:false,
        };
    }

    handleClick = () => {
        this.setState({
            menuIsOpen:!this.state.menuIsOpen
        });
    }
    
    render(){
        return(
            <nav style={this.state.menuIsOpen ? {left:0} : {left:-248}} className="menu">
                <ul className="menu-item-list">
                    {this.props.menuItems.map((item, index)=>
                        <li key={index.toString()} className="menu-item">{item.name}</li>
                    )}
                </ul>
                <MenuButton isOpen={this.state.menuIsOpen} onClick={this.handleClick}/>
            </nav>
        );
    }
}