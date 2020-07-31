import { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './date-range'
import SelectFilter from './select'
import React from 'react'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <SelectFilter articles={this.props.articles} />
                <DateRange />
            </div>
        )
    }
}

export default Filters