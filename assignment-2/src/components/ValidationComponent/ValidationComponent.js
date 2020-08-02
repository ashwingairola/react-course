import React from "react";

export class ValidationComponent extends React.Component {
  render() {
    const textLength = this.props.textLength;
    const minLength = +this.props.minLength;
    const maxLength = +this.props.maxLength;

    let validationMessage = "";

    if (textLength < minLength && textLength > 0) {
      validationMessage = this.props.minLengthErrorMessage;
    }

    if (textLength > maxLength) {
      validationMessage = this.props.maxLengthErrorMessage;
    }

    return <p>{validationMessage}</p>;
  }
}
