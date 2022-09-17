import React from "react";
import ScrollBar from "../Components/scrollBar";
import "./trackList.css"
import TrackListItem from "./trackListItem";

export default function TrackList(props){
    var elements=[];
    for (let index = 0; index < 20; index++) {
        elements.push(<TrackListItem key={index}/>);
    }
    return(
        
        <ul className="track-list">
            {elements}
        </ul>
       
    )
}