import React, { Component } from 'react'
import ComposerListing from './components/ComposerListing.js'
import axios from 'axios'
import Form from 'react-jsonschema-form'
// import { Route, Link } from 'react-router-dom'

class App extends Component {
  state = {
    composers: [],
    name: '',
    eras: []
  }

  componentDidMount() {
    this.showAllComposers()
  }

  showAllComposers = () => {
    axios.get('http://localhost:3000/eras/1/composers').then((response) => {
      console.log(response.data)
      this.setState({
        composers: response.data
      })
    })
  }

  handleSearchChange = (event) => {
    const name = event.target.value
    console.log(name)
    this.setState({ name: name }, () => {
      axios.get('http://localhost:3000/composers').then((response) => {
        console.log(response)
        this.setState({ composers: response.data })
      })
    })
  }

  updateEra = (form) => {
    console.log(form)

    axios
      .put('http://localhost:3000/eras/1', {
        era: form.formData
      })
      .then((response) => {
        console.log(response)
        this.setState({
          eras: response.data
        })
      })
  }

  render() {
    const schema = {
      title: 'Update an era',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: { type: 'string', title: 'Name', default: 'A new era' },
        description: { type: 'string', title: 'Description', default: 'Additional Info' },
        date_beg: { type: 'string', format: 'number', title: 'Begin Date', default: 'Begin' },
        date_end: { type: 'string', format: 'number', title: 'End Date', default: 'End' }
      }
    }
    return (
      <section>
        <h1>Find a Composer:</h1>
        <input value={this.state.name} onChange={this.handleSearchChange} />
        <ul>
          <h3>Composers:</h3>
          {this.state.composers.map((composer) => {
            return <ComposerListing key={composer.id} id={composer.id} name={composer.name} />
          })}
        </ul>
        <section>
          <h3>Update an Era</h3>
          <Form schema={schema} onSubmit={this.updateEra} />
        </section>
      </section>
    )
  }
}

export default App
