import React, { Component } from 'react'

class UpdateEra extends Component {
  render() {
    const schema = {
      title: 'Update an era',
      type: 'object',
      required: [ 'name' ],
      properties: {
        name: { type: 'string', title: 'Name', default: 'A new era' },
        description: { type: 'string', title: 'Description', default: 'Additional Info' },
        date_beg: { type: 'string', format: 'date', title: 'Begin Date', default: 'Begin' },
        date_end: { type: 'string', format: 'date', title: 'End Date', default: 'End' }
      }
    }
    return (
      <section>
        <h3>Update an Era</h3>
        <Form schema={schema} onSubmit={this.updateEra} />
      </section>
    )
  }
}

export default UpdateEra
