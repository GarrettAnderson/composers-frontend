import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import EraListItem from './EraListItem'
import EraList from './EraList'

// Create a global variable to create a class for Eras and establish props.
// const Composer = (props) => {
//   console.log('the composer constructor??')
//   axios.get(`{http://localhost:3000/eras/}`)
// }
// Axios call to get data from localhost API
// const Era
// Create a global delete function --> const removeComposer = event => {}

// Confirm by Gavin - Is the reason for creating a global Composer function in order to reload list after item is deleted???

class EraDetails extends Component {
  state = {
    name: '',
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
    axios.get(`http://localhost:3000/eras/${this.props.era.id}`).then((response) => {
      console.log(response)
      this.setState({ eras: response.data })
    })
  }

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
        <h1>{this.props.era.name}</h1>
        <span>
          {this.props.era.begin} - {this.props.era.end}
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
