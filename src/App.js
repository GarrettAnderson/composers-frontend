import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EraList from './components/EraList'
import EraDetails from './components/EraDetails'
import EraListItem from './components/EraListItem'

// import Form from 'react-jsonschema-form'

// import ComposerListing from './components/ComposerListing'

class App extends Component {
  render() {
    return (
      <Router>
        {/* <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">
              <Link to="/">Suncoast Developers Guild</Link>
            </h1>
          </div> */}
        <Switch>
          <Route exact path="/" component={EraList} />
          {/* <Route exact path="/eras/new" component={CreateCohort} /> */}
          <Route exact path="/eras/:id" component={EraListItem} />
          <Route exact path="/eras/edit/:id" component={EraDetails} />
          {/*  <Route exact path="/cohorts/:cohort_id/students/:student_id" component={StudentDetails} />  */}
        </Switch>
        {/* </div> */}
      </Router>
    )
  }
}

export default App
