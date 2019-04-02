import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import ComposerListing from './components/ComposerListing'
import axios from 'axios'
import Form from 'react-jsonschema-form'
import EraListItem from './EraListItem'

class EraList extends Component {
  state = {
    name: '',
    eras: [],
    composers: []
  }

  componentDidMount() {
    // this.showAllEras()
    axios.get('http://localhost:3000/eras').then((response) => {
      console.log(response)
      this.setState({
        eras: response.data
      })
    })
  }

  // showAllEras = () => {
  //   axios.get('http://localhost:3000/eras').then((response) => {
  //     console.log(response)
  //     this.setState({
  //       eras: response.data
  //     })
  //   })
  // }

  // handleSearchChange = (event) => {
  //   const name = event.target.value
  //   console.log(name)
  //   this.setState({ name: name }, () => {
  //     axios.get('http://localhost:3000/composers').then((response) => {
  //       console.log(response)
  //       this.setState({ composers: response.data })
  //     })
  //   })
  // }

  // updateEra = (form) => {
  //   console.log(form)

  //   axios
  //     .put('http://localhost:3000/eras/1', {
  //       era: form.formData
  //     })
  //     .then((response) => {
  //       console.log(response)
  //       this.setState({
  //         eras: response.data
  //       })
  //     })
  // }
  render() {
    return (
      <section>
        <h1>Periods of Music:</h1>
        {/* <input value={this.state.name} onChange={this.handleSearchChange} /> */}
        <ul>
          {/* <h3>Periods of Music:</h3> */}
          {this.state.eras.map((era) => {
            return (
              <EraListItem
                key={era.id}
                id={era.id}
                era={era}
                begin={era.date_beg}
                end={era.date_end}
                description={era.description}
              />
            )
            // return <ComposerListing key={composer.id} id={composer.id} name={composer.name} /> */}
          })}
        </ul>
      </section>
    )
  }
}

export default EraList
