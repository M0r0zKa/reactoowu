import React from 'react';


import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {axiosJsonServices} from "../../services/axios.json.services";
import {urls} from "../../constants/urls";
import {Post} from "../Post/Post";

function Posts(props) {
    let {id} = useParams()

    const [post, setPost] = useState([])
    useEffect(() => {
        axiosJsonServices.getPostComment(urls.posts, id).then(({data}) => {
                setPost(data)
            }
        )
    }, [id])

    return (
        <div>
            <hr/>
            {post ?<Post key={post.id} post={post}/>:null}
        </div>
    );
}

export {Posts};