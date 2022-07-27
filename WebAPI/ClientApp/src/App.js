import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import PageSwitcher from "./Components/pageSwitcher";
import NavMenu from "./Menu/navMenu";
import Player from "./PlayerComponents/player";
import './App.css'

export default class App extends React.Component{



    render(){
        const menuElements = [
            {name: 'Главная', url: 'src'},
            {name: 'Проигрыватель', url: 'src'},
            {name: 'Мои плейлисты', url: 'src'},
            {name: 'Профиль', url: 'src'},
            {name: 'Выйти', url: 'src'}
        ];
        
        return(
            <div className="layout">
                <header className="header">
                    
                </header>
                <NavMenu menuItems={menuElements}/>
                <main className="main">
                    <Player/>
                </main>
                <footer className="footer">

                </footer>
            </div>
        )
    }
}