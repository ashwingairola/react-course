import React from "react";
import "./App.css";

import { ValidationComponent } from "./components/ValidationComponent/ValidationComponent";
import { CharComponent } from "./components/CharComponent/CharComponent";

class App extends React.Component {
  state = {
    textInput: "",
  };

  inputChangeHandler = (event) => {
    const newTextValue = event.target.value;
    this.setState({ textInput: newTextValue });
  };

  deleteCharHandler = (charIndex) => {
    const textInput = this.state.textInput;
    let chars = textInput.split("");
    chars = chars.filter((_char, i) => i !== charIndex);
    const newText = chars.join("");
    this.setState({ textInput: newText });
  };

  render() {
    const charComponents = [];
    const textInput = this.state.textInput;

    for (let i = 0; i < textInput.length; ++i) {
      charComponents.push(
        <CharComponent
          char={textInput[i]}
          clicked={() => this.deleteCharHandler(i)}
          key={i}
        />
      );
    }

    return (
      <div className="App">
        <input
          type="text"
          name="paraInput"
          onChange={this.inputChangeHandler}
          value={this.state.textInput}
        />

        <p>{this.state.textInput}</p>
        <ValidationComponent
          textLength={this.state.textInput.length}
          minLength="5"
          maxLength="10"
          minLengthErrorMessage="Text is too short."
          maxLengthErrorMessage="Text is too long."
        />
        {charComponents}
      </div>
    );
  }
}

export default App;
