import { Component } from "react"
import './Menu.css'

export default class Menu extends Component {
    render(){
        return (
            <div id="menu">
                <a href="/Menu">Home</a>
                <a href="/about_me">About me</a>
                <a href="/work">Work</a>
                <a href="/studies">Studies</a>
            </div>
        )
    }
}