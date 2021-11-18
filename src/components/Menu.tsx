import { Component } from "react"
import './Menu.css'

export default class Menu extends Component {
    render(){
        return (
            <div id="menu">
                <a href="/App">Home</a>
                <a href="#AboutMe-container">About me</a>
                <a href="#Work-container">Work</a>
                <a href="/studies">Studies</a>
            </div>
        )
    }
}