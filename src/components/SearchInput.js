import React from "react";

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
