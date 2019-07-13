import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(event) {
    this.props.onSearch(event.target.value)
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <input 
        type="text" 
        value={this.state.filter}
        placeholder='Search todo ...'
        onChange={this.handleFilter}
      />
    )
  }
}

export default Search