import React from "react";
import ButtonTemplate from "../../Templates/buttonTemplate";
import './playButton.css';
export default class PlayButton extends React.Component{
    
    

    constructor(props){
        super(props)
        this.state={
            played:false
        };
    }



    playPauseHandle = ()=>{
        this.setState({
            played:true
        })
    }
    render(){

        const iconPlayBtn = 
            <><svg width="49" height="55" className="background-play-btn" viewBox="0 0 49 55" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.7455 26.9454L2.75679 2.06674C2.41969 1.87608 2 2.11664 2 2.50051V52.4995C2 52.8843 2.42151 53.1247 2.75862 52.9322L46.7473 27.812C47.085 27.6191 47.084 27.1369 46.7455 26.9454Z" strokeMiterlimit="2"/>
            </svg>
            <svg width="49" height="55" className="border-play-btn"  viewBox="0 0 49 55" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.7455 26.9454L2.75679 2.06674C2.41969 1.87608 2 2.11664 2 2.50051V52.4995C2 52.8843 2.42151 53.1247 2.75862 52.9322L46.7473 27.812C47.085 27.6191 47.084 27.1369 46.7455 26.9454Z" strokeWidth={4} strokeMiterlimit="2"/>
            </svg></> 
        
        return(
            <ButtonTemplate className="play-btn" onClickFunc={this.playPauseHandle}>
                {iconPlayBtn}
            </ButtonTemplate>
        )
    }
}