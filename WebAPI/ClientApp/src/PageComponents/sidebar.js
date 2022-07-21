import React from "react";
import  ReactDOM  from "react-dom";
import NavMenu from "../Menu/navMenu"; 
import Button from "../Buttons/defaultButton";
import './sidebar.css'

export default class Sidebar extends React.Component{

    openMenuFunc = () => {
        
    }

    render(){
        
        return(
            <sidebar className="sidebar">
                
                <Button onClickFunc={this.openMenuFunc}/>
            </sidebar>
        )
    }
}