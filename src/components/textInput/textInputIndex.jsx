/* eslint-disable react/prop-types */

import React from 'react';

import './textInputStyle.css';

export default function TextInput(props) {
  const { handleChange, searchTerm } = props;
  return (
    <input
      className="search"
      type="search"
      onChange={handleChange}
      value={searchTerm}
      placeholder="Digite sua pesquisa"
    />
  );
}
