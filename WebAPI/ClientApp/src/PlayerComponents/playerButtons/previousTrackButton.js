import React from "react";
import ButtonTemplate from "../../Templates/buttonTemplate";
import "./previousTrack.css";
export default function PreviousTrackButton(props){
    const iconPrevTrackBtn =
    <>
        <svg className="background-prev-btn" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1697 28.0546L49.4955 52.9333C49.7202 53.1239 50 52.8834 50 52.4995L50 2.50052C50 2.11572 49.719 1.87528 49.4943 2.06778L20.1685 27.188C19.9433 27.3809 19.944 27.8631 20.1697 28.0546Z"/>
            <rect x="15" y="54" width="11" height="53" rx="5.5" transform="rotate(-180 15 54)" />
        </svg>
        <svg className="border-prev-btn" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1697 28.0546L49.4955 52.9333C49.7202 53.1239 50 52.8834 50 52.4995L50 2.50052C50 2.11572 49.719 1.87528 49.4943 2.06778L20.1685 27.188C19.9433 27.3809 19.944 27.8631 20.1697 28.0546Z" strokeMiterlimit="2"/>
            <rect x="14" y="53" width="9" height="51" rx="4.5" transform="rotate(-180 14 53)"/>
        </svg>
        
    </>
    return(
        <ButtonTemplate className="prev-btn" onClickFunc ={props.onClick}>
            {iconPrevTrackBtn}
        </ButtonTemplate>
    )
}