import React from "react";
import ButtonTemplate from "../../Templates/buttonTemplate";
import "./nextTrack.css"

export default function NextTrackButton(props){
    const iconNextTrackBtn=
    <>
        <svg className="background-next-btn" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.8303 26.9454L5.50453 2.06674C5.2798 1.87608 5 2.11664 5 2.50051V52.4995C5 52.8843 5.28101 53.1247 5.50575 52.9322L34.8315 27.812C35.0567 27.6191 35.056 27.1369 34.8303 26.9454Z"/>
            <rect x="40" y="1" width="11" height="53" rx="5.5"/>
        </svg>
        <svg className="border-next-btn" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.8303 26.9454L5.50453 2.06674C5.2798 1.87608 5 2.11664 5 2.50051V52.4995C5 52.8843 5.28101 53.1247 5.50575 52.9322L34.8315 27.812C35.0567 27.6191 35.056 27.1369 34.8303 26.9454Z" strokeMiterlimit="2"/>
            <rect x="41" y="2" width="9" height="51" rx="4.5"/>
        </svg>
    </>
    return(
        <ButtonTemplate className="next-btn" onClickFunc={props.onClick}>
            {iconNextTrackBtn}
        </ButtonTemplate>
    )
}