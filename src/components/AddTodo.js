import React from 'react'

class AddTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      description: ''
    }
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleChangeDescription(event) {
    this.setState({description: event.target.value})
  }

  handleAddTodo(event) {
    this.props.onAdd(this.state.description)
    this.setState({description: ''})
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Masukan todo ..." 
          value={this.state.description}
          onChange={this.handleChangeDescription}
        />
        <button type="submit" onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    )
  }
}

export default AddTodo