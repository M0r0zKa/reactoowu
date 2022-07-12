import React from 'react';
import {NavLink} from "react-router-dom";

function MainLayout(props) {
    return (
        <div>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/Users"}>Users</NavLink></li>
                <li><NavLink to={"/Posts"}>Posts</NavLink></li>
            </ul>
        </div>
    );
}

export {MainLayout};