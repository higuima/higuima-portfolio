import React from 'react';
import './BackgroundCircle.css'
export default class BackgroundCircle extends React.Component{
  render() {
    return (
        <div>
            <div className='App-circle top-left'></div>
            <div className='App-circle bottom-left'></div>
            <div className='App-circle top-right'></div>
            <div className='App-circle bottom-right'></div>
        </div>
    );
  }
}

