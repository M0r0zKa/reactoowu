import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props)
        this.user = this.props.user
    }
    render() {
        return (
            <div>
                <h3>{this.user.id} - {this.user.name}</h3>
            </div>
        );
    }
}

export {User};