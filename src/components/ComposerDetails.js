import React, { Component } from 'react'
import EraDetails from './EraDetails'
import axios from 'axios'
import { Link } from 'react-router-dom'
// Only include Link import bc redirect isn't happening? only listing the composers per era and the UI functionality doesn't drill into a page just for listing composers - correct???

class ComposerDetails extends Component {
  state = {
    composer: []
  }

  render() {
    return <li>test</li>
  }
}

export default ComposerDetails
