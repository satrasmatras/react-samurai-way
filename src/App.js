import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


// https://colorscheme.ru/#3q61Tw0w0w0w0

// vue color - #40b17b
// dark gray = #374b62
// light gray = #465671

const App = () => {
  return (

    <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
            {/*<Profile />*/}
            <Dialogs />
        </div>

    </div>

  );
};

export default App;