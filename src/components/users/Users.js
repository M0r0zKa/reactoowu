import React, {useEffect, useState} from 'react';
import {getUsers} from "../../service/users.api.service";
import {User} from "../user/User";

function Users(props){

const [users, setUsers] = useState([])

useEffect(()=>{
    getUsers().then(data=> {
        console.log(data);
    })
},[])

return (

    <div>
        dsanlkdj
        {
            users.map(value => <User user={value}/>)
        }

    </div>
)}


export {Users};