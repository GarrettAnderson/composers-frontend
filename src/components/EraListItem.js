import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EraList from './EraList'

class EraListItem extends Component {
  render() {
    return (
      <Link to={`/eras/${this.props.id}`} key={this.props.id} className="home-page">
        <li>
          <h2> {this.props.era.name}</h2>
        </li>
      </Link>
    )
  }
}

export default EraListItem
