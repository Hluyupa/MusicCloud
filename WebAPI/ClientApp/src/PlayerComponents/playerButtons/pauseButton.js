import React from "react";
import ButtonTemplate from "../../Templates/buttonTemplate";
import "./pauseButton.css";

export default class PauseButton extends React.Component{
    render(){
        const iconPauseBtn =
        <><svg className="background-pause-btn" width="37" height="55" viewBox="0 0 37 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="53" rx="6.5"/>
            <rect x="23" y="1" width="13" height="53" rx="6.5" />
        </svg>
        <svg className="border-pause-btn" width="37" height="55" viewBox="0 0 37 55" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="11" height="51" rx="5.5" />
        </svg>
        <svg className="border-pause-btn" width="37" height="55" viewBox="0 0 37 55" xmlns="http://www.w3.org/2000/svg">
            <rect x="24" y="2" width="11" height="51" rx="5.5" />
        </svg></>
        return(
            <ButtonTemplate className="pause-btn">
                {iconPauseBtn}
            </ButtonTemplate>
        );
    }
}