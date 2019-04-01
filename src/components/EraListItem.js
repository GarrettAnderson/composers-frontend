import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class EraListItem extends Component {
  render() {
    return (
      <Link to={`/eras/${this.props.id}`} key={this.props.id} className="home-page">
        <li>
          <h2>{this.props.era}</h2>
        </li>
      </Link>
    )
  }
}

export default EraListItem