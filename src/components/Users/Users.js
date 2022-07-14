import React, {Component} from 'react';

import {GetApiServices} from "../../services/get.api.services";
import {User} from "../index";

class Users extends Component {

    state = {users: []}

componentDidMount() {
    this.usersApiServices = new GetApiServices()
    this.usersApiServices.getUsers().then(users => this.setState({users: users}))
}

    render() {
        return (
            <div>
                <ul>

                    {
                        this.state.users.map(value => <User key={value.id} user={value}/>)
                    }
                </ul>
            </div>
        );
    }
}
export {Users};