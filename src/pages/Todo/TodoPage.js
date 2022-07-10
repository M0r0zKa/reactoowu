import React, {useEffect, useState} from 'react';


import  {urls} from "../../constants/urls"
import {Todo} from "../../components";
import {SetAxiosItem} from "../../functions/SetAxiosItem";
import {axiosJsonServices} from "../../services/axios.json.services";

function TodoPage(props) {
    return (
        <div>
            {
            SetAxiosItem(axiosJsonServices.getAll(urls.todo),null,[]).map(todo=><Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
}

export {TodoPage};