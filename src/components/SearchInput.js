import React from "react";
// import ReactDOM from "react-dom";


export default function SearchInput(props) {
  return (
    <input
      type="search"
      placeholder="Type something"
      width="100%"
      {...props}
    />
  )
}
