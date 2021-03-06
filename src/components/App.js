import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends Component {
  state = {
    language: "english"
  };
  onLanguageChange = language => {
    if (language !== this.state.language) this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
