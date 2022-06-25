import React, {useEffect, useState} from 'react';
import {Rocket} from "../rocket/rocket";

function Rockets(props) {

    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => value.filter(value=> value.launch_year !== '2006'))
            .then(value => {
                setRockets(value)
            })
    }, []);


    return (
        <div>{
            rockets.map((value,index) => <Rocket key={index} item={value}/>)
        }
        </div>
    );
}

export {Rockets};