import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


// https://colorscheme.ru/#3q61Tw0w0w0w0

// vue color - #40b17b
// dark gray = #374b62
// light gray = #465671

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>

            <div className='app-wrapper'>

                <Header/>
                <NavBar state={props.state.siteBar}/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.messagesPage}
                           />}
                    />
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                           />}
                    />
                    <Route path='/feed' component={News}/>
                    <Route path='/audio' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>

        </BrowserRouter>
    );
};

export default App;