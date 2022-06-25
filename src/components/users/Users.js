import React, {useEffect, useState, useTransition} from 'react';
import {User} from "../user/User";
import {UserDetails} from "../userdetails/UserDetails";

function Users(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    },[])

    return (
        <div>

            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}

export {Users};