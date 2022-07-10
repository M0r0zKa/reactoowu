import React, {useEffect, useState} from 'react';
import {Posts} from "../components";

function CommentPostsPage(post) {


    return (
        <div>
           <Posts post={post}/>
        </div>


    )
        ;
}

export {CommentPostsPage};