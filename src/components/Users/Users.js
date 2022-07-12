import React, {Component} from 'react';
import {GetApiServices} from "../../services/get.api.services";
import {User} from "../User/User";


class Users extends Component {

    state = {users: []}

    constructor() {
        super();
        this.usersApiServices = new GetApiServices()
        this.usersApiServices.getUsers().then(users => this.setState({users: users}))
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(value => <User key={value.id} user={value}/>)
                }

            </div>
        );
    }
}

export {Users};