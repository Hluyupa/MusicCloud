import React, {useState, useEffect} from "react";
import "./scrollBar.css";

function getWindowInfo(){
        
    return{
        innerHeight: window.innerHeight,
        scrollHeight: document.body.scrollHeight,
        pageYOffset: window.pageYOffset
    }
}

export default function ScrollBar(props){
    const [scrollThumbHeight, setScrollThumbHeight] = useState("0%");
    
    useEffect(()=>{
        function handleScroll(){
            var totalHeight = document.body.scrollHeight-window.innerHeight;
            setScrollThumbHeight((window.pageYOffset/totalHeight*100).toString()+"%");
            
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    },[])

    return(
        <>
            <div className="scroll-track"></div>
            <div style={{height:scrollThumbHeight}} className="scroll-thumb"></div>
        </>
    )
}