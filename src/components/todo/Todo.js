import React from 'react';

function Todo({todo}) {
    const {id,userId,title,completed} = todo
    return (
        <div>
           <p><b>userId:</b> {userId}</p>
            <p><b>idTodo:</b> {id}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>completed:</b> {completed.toString()}</p>
        <hr/>
        </div>
    );
}

export {Todo};