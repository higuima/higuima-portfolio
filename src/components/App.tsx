import React from 'react';
import './App.css';
import Menu from './Menu';
export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Menu/>
        {/* <div className='App-circle top-left'></div>
        <div className='App-circle bottom-left'></div>
        <div className='App-circle top-right'></div>
        <div className='App-circle bottom-right'></div> */}
      </div>
    );
  }
}

