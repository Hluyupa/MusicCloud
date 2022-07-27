import React from "react";
import PlayerControlPanelButtons from "./playerControlPanelButtons";
import './player.css'

export default class Player extends React.Component{
    render(){
        return(
            <div className="player">
                <div className="music-name">

                </div>
                <div className="music-album-image">

                </div>
                <div className="player-slider">

                </div>
                <PlayerControlPanelButtons/>
            </div>
        )
    }
} 