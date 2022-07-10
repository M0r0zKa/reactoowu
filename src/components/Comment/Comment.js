import React from 'react';


import {useNavigate, useParams} from "react-router-dom";
import {CommentPostsPage} from "../../pages/CommentPostsPage";


function Comment({comment: {postId, id, name, email, body}}) {
    let navigator = useNavigate();
    let params = useParams()

    return (
        <div>
            <div onClick={() => {
                navigator(postId.toString())
            }}>
                <p><b>postId:</b> {postId}</p>
                <p><b>id:</b> {id}</p>
                <p><b>name:</b> {name}</p>
                <p><b>email:</b> {email}</p>
                <p><b>body:</b> {body}</p>
            </div>

           {(postId.toString()) === params.id? <div><CommentPostsPage/></div> :console.log(23132)}
            <hr/>


        </div>
    );
}

export {Comment};