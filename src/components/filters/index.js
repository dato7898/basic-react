import { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import React from 'react'

class Filters extends Component {

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