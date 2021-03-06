import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MetAccess from "./components/met-access";
import YoutubeAccess from "./components/youtube-access";
import Credits from "./components/credits";
import WebcamAccess from "./components/webcam-access";
import { Spring, config } from "react-spring/renderprops";
import Button from "./components/button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: true,
    };
    this.reloading = this.reloading.bind(this);
  }

  reloading () {
    this.setState({ reload: !this.state.reload });
  }

  render() {
    return (
      <Router>
        <switch>
          <div className="App">
            <Route exact path="/">
              {
                <Spring
                  config={config.slow}
                  delay={1000}
                  from={{ opacity: 0, transform: "translateX(-10vw)" }}
                  to={{ opacity: 1, transform: "translateX(0vw)" }}
                >
                  {(props) => (
                    <Button
                      stylize={props}
                      idButton="button2"
                      func={this.reloading}
                      butnTxt="TÉLÉPORTATION"
                      move="left"
                    />
                  )}
                </Spring>
              }
              <MetAccess />
              <div className="background"></div>
              <div className="behind">
                {this.state.reload ? <YoutubeAccess /> : this.reloading()}
              </div>
            </Route>
            <Route exact path="/credits">
              <Credits />
            </Route>
          </div>
        </switch>
      </Router>
    );
  }
}

export default App;
