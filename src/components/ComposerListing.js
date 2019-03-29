import React, { Component } from 'react'

class ComposerListing extends Component {
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
      </li>
    )
  }
}

export default ComposerListing
