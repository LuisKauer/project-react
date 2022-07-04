/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './buttonStyle.css';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { onClick, text, disabled } = this.props;
    return (

      <button
        className="btn"
        type="submit"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>

    );
  }
}
