import React, {Component} from 'react';

import {GetApiServices} from "../../services/get.api.services";
import {Post} from "../Post/Post";


class Posts extends Component {
    state = {posts: []}

    componentDidMount() {
        this.postsApiService = new GetApiServices()
        this.postsApiService.getPosts().then(posts => this.setState({posts: posts}))
    }

    render() {

        return (
            <div>
                {
                    this.state.posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export {Posts};