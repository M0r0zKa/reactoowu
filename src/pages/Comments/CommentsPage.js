import React from 'react';
import {SetAxiosItem} from "../../functions/SetAxiosItem";
import {axiosJsonServices} from "../../services/axios.json.services";
import {Comment} from "../../components";
import {urls} from "../../constants/urls";

function CommentsPage(props) {
    return (
        <div>
            <div>{
                SetAxiosItem(axiosJsonServices.getAll(urls.comments),null,[]).map(comment => <Comment key={comment.id}
                                                                                                      comment={comment}
                />)
            }</div>
        </div>
    );
}

export {CommentsPage};