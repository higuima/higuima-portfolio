import React from 'react';
import AboutMe from './AboutMe';
import './App.css';
import BackgroundCircle from './BackgroundCircles';
import Menu from './Menu';
import Phrase from './Phrase';
import Work from './Work';
export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        {/* <BackgroundCircle/> */}
        <Menu/>
        <Phrase/>
        <AboutMe/>
        <Work/>
      </div>
    );
  }
}

