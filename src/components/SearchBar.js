import React, { Component } from 'react'

class SearchBar extends Component {
  state = { term: '' }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              className=""
              name="term"
              value={this.state.term}
              onChange={this.onChange}
              type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
