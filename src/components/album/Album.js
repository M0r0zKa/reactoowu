import React from 'react';

function Album({album: {userId, id, title}}) {

    return (
        <div>
            <p><b>userId:</b> {userId}</p>
            <p><b>id:</b> {id}</p>
            <p><b>title:</b> {title}</p>
            <hr/>
        </div>
    );
}

export {Album};