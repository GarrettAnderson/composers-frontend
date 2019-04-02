import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import EraListItem from './EraListItem'
import EraList from './EraList'

// Create a global variable to create a class for Eras and establish props.
// Create a global delete function --> const removeComposer = event => {}
// After Delete function executes, call the composers list for that specific era
const Composer = (props) => {
  console.log('the composer constructor??')
  // Axios call to get data from localhost API
  axios.get(`{http://localhost:3000/eras/${this.props.match.params.id}}`).then((response) => {
    console.log(response)
    this.setState({ eras: response.data })
  })
}

class EraDetails extends Component {
  state = {
    name: '',
    // eras: {}
    eras: {
      composers: []
    }
  }
  // Nested states necessary because of the relationship of many composers to one era???

  componentDidMount() {
    this.loadEraDetails()
  }

  loadEraDetails = () => {
    console.log('page has loaded!?!?')
    axios.get(`http://localhost:3000/api/eras/${this.props.match.params.id}`).then((response) => {
      console.log(response)
      this.setState({ eras: response.data })
    })
  }

  renderEraComposers = () => {
    return (
      <ul className="composers-list">
        {this.state.eras.composers.map((composer) => {
          console.log(composer)
          return (
            <li key={composer.id}>
              <figure>
                <img src={require('../images/mozart.jpg')} />
                <h5>{composer.name}</h5>
                <span>
                  ({composer.birth_date} to {composer.death_date})
                </span>
                <p>
                  <b>Famous Piece:</b> {composer.famous_piece}
                </p>
                <figcaption>{composer.description}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    const schema = {
      title: 'Composers',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: { type: 'string', title: 'Name', default: '' },
        birth_date: { type: 'string', format: 'date', title: 'Birth Date', default: '' },
        death_date: { type: 'string', format: 'date', title: 'Death Date', default: '' },
        famous_piece: { type: 'string', title: 'Famous Piece', default: '' },
        description: { type: 'string', title: 'Description', default: '' }
      }
    }
    return (
      <section>
        <h1>{this.state.eras.name}</h1>
        <span>
          ( {this.state.eras.date_beg} CE - {this.state.eras.date_end} CE )
        </span>

        <h2>Well Known {this.state.eras.name} Composers:</h2>
        {this.renderEraComposers()}

        <section className="add-composer-form">
          <h3>Add a Composer:</h3>
          <Form schema={schema} onSubmit={this.addComposerToEra} />
        </section>
      </section>
    )
  }
}

export default EraDetails
