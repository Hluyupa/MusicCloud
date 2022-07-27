import React from "react";
import PlayButton from "./playerButtons/playButton.js";
import PauseButton from "./playerButtons/pauseButton.js";
import './playerControlPanelButtons.css'

export default class PlayerButtons extends React.Component{
    render(){
        return(
            <div className="player-control-panel-buttons">
                <PauseButton/>
                <PlayButton/>
            </div>
        )
    }
} 