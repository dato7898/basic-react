import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    openItem: null
  }

  handleChange = openItem => this.setState({ openItem })

  get options() {
    return this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.openItem}
        onChange={this.handleChange}
      />
    )
  }
}

export default SelectFilter
