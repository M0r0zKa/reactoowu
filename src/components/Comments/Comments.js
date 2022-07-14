import React, {Component} from 'react';

import {GetApiServices} from "../../services/get.api.services";
import {Comment} from "../index";


class Comments extends Component {
    state = {comments: []}


    componentDidMount() {
        this.commentsApiServices = new GetApiServices()
        this.commentsApiServices.getComments(this.props.id).then(comments => this.setState({comments: comments}))
    }


    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        );
    }
}

export {Comments};