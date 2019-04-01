import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class EraListItem extends Component {
  render() {
    return (
      <Link to={`/eradetails/${this.props.id}`} key={this.props.id}>
        <li>
          <p>{this.props.era}</p>
        </li>
      </Link>
    )
  }
}

export default EraListItem
