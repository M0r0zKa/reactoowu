import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.post = this.props.post

    }
    render() {
        return (
            <div>
                <p>{this.post.id} - {this.post.body}</p>
            </div>
        );
    }
}

export default Post;