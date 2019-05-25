import React, { Component } from "react";

import LanguageContext from "../context/LanguageContext";

class Button extends Component {
  // static keyword adds property to class vs instance
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
