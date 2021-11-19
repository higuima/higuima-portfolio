import { Component } from "react"
import './AboutMe.css'

export default class Menu extends Component {
    render(){
        return (
           <div className="AboutMe-container" id="AboutMe-container">
                <div id="content">
                    <div  className="image">
                        <img src="https://avatars.githubusercontent.com/u/18645154?v=4"/>
                    </div>
                    <div id="text">
                        <h1>Who am I?</h1>
                        <p>Hi! I’m Helena Guimarães, math student and web developer. I am a creative professional with a solid track record in all aspects of the creative process: conceptualization, planning, execution. I am an active person and am always working on something new.</p>
                    </div>
                </div>
           </div>
        )
    }
}