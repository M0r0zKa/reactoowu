import React from 'react';
import {useState} from "react";
import {UserDetails} from "../userdetails/UserDetails";

function User({user}) {


    const [userInfo, setUserInfo] = useState(null)
    const buttonUserDetails = (item) => {
        setUserInfo(item)
    };

    return (

        <div>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={() => {
                buttonUserDetails({user})
            }}>User details
            </button>
            <div>{
                userInfo && <UserDetails
                    user={user}
                />
            }</div>
        </div>
    );
}

export {User};