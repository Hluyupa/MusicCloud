import React from "react";
import PlayButton from "./playerButtons/playButton.js";
import PauseButton from "./playerButtons/pauseButton.js";
import PreviousTrackButton from "./playerButtons/previousTrackButton.js";
import './playerControlPanelButtons.css'
import NextTrackButton from "./playerButtons/nextTrackButton.js";

export default class PlayerButtons extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            isPlayed:false
        }
    }

    playHandleClick =()=>{
        if(this.state.isPlayed === true)
        {
            return;
        }
        this.setState({
            isPlayed:true
        });
    }

    pauseHandleClick=()=>{
        if(this.state.isPlayed === false)
        {
            return;
        }
        this.setState({
            isPlayed:false
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.isPlayed !== nextState.isPlayed){
            return true;
        }
        return false;
    }
    
    render(){
        const green = "#61892f";
        const white = "#f3eff5"
        return(
            <div className="player-control-panel-buttons">
                <PreviousTrackButton />
                <PauseButton onClick={this.pauseHandleClick} background={this.state.isPlayed ? white:green}/>
                <PlayButton onClick={this.playHandleClick} background={this.state.isPlayed ? green:white}/>
                <NextTrackButton/>
            </div>
        )
    }
} 