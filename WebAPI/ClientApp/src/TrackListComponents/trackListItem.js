import React from "react";
import "./trackListItem.css";

export default function TrackListItem(props){
    return(
        <li className="track-list-item">
            <img className="track-album-image"/>
            <div className="track-info">
                <p className="track-name">Название трека</p>
                <p className="album-name">Название альбома</p>
            </div>
        </li>
    )
}