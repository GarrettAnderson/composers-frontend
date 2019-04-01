import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'

class EraDetails extends Component {
  state = {
    name: '',
    eras: {
      composers: []
    }
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/eras/${this.props.match.params.id}`)
  // }

  render() {
    // const schema = {
    //   title: 'Composers',
    //   type: 'object',
    //   required: [ 'name' ],
    //   properties: {
    //     name: { type: 'string', title: 'Name', default: '' },
    //     birth_date: { type: 'string', format: 'date', title: 'Birth Date', default: '' },
    //     death_date: { type: 'string', format: 'date', title: 'Death Date', default: '' },
    //     famous_piece: { type: 'string', title: 'Famous Piece', default: '' },
    //     description: { type: 'string', title: 'Description', default: '' }
    //   }
    // }
    return (
      <section>
        <h1>{this.props.era}</h1>
        <span>
          {this.props.begin} - {this.props.end}
        </span>
        <ul>
          <li>Composer</li>
          <li>Composer</li>
          <li>Composer</li>
          <li>Composer</li>
          <li>Composer</li>
        </ul>

        <section className="add-composer-form">
          <h3>Add a Composer:</h3>
          {/* <Form schema={schema} onSubmit={this.addComposerToEra} /> */}
        </section>
      </section>
    )
  }
}

export default EraDetails
