import React, { Component } from "react";

export default class Catch extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // Affichage du fallback de notre choix
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
