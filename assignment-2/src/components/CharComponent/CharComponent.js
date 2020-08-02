import React from "react";
import "./CharComponent.css";

export class CharComponent extends React.Component {
  render() {
    const char = this.props.char ? this.props.char[0] : "";

    return (
      <div className="CharComponent" onClick={this.props.clicked}>
        {char}
      </div>
    );
  }
}
