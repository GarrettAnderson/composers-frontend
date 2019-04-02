import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EraList from './components/EraList'
import EraDetails from './components/EraDetails'
import EraListItem from './components/EraListItem'
import ComposerDetails from './components/ComposerDetails'

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
          <Route exact path="/eras/:id" component={EraDetails} />
          {/* <Route exact path="/composers/:id" component={ComposerDetails} /> */}
          <Route exact path="/eras/:era_id/composers/:composer_id" component={ComposerDetails} />

          {/* <Route exact path="/eras/:era_id/composers/:composer_id" component={ComposerDetails} />           */}
          {/* <Route exact path="/eras/edit/:id" component={EraDetails} /> */}
        </Switch>
        {/* </div> */}
      </Router>
    )
  }
}

export default App
