import React from 'react';

class UserForm extends React.Component {
    state = {
        username: ''
    }

    render() {
        return (
            <div>
                Username:
                <input value={this.props.value} onChange={this.handleUserChange} />
            </div>
        )
    }

    handleUserChange = ev => {
        this.props.onChange(ev.target.value)
    }
}

export default UserForm