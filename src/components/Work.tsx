
import { Component } from "react"
import './Work.css'

export default class Menu extends Component {
    render(){
        return (
            <div  className="Work-container" id="Work-container">
              <div className="ui three cards">
                <div className="ui card">
                  <div className="content">
                    <div className="ui placeholder">
                        <h1 id="ad">Your website!</h1>
                    </div>
                  </div>
                </div>
                <div className="ui card">
                  <div className="content">
                    <div className="ui placeholder">
                        <h1 id="ad">Your website!</h1>
                    </div>
                  </div>
                </div>
                <div className="ui card">
                  <div className="content">
                    <div className="ui placeholder">
                        <h1 id="ad">Your website!</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                <a href="">More?</a>
              </div> */}
          </div>
        )
    }
}