import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="header">
          TodoList App<span role="img" aria-label="fire and rocket imoji">🔥🚀</span>
        </h1>
      </header>
    );
  }
}

