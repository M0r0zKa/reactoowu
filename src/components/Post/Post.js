import React, {Component} from 'react';

import {Comments} from "../index";

class Post extends Component {
    state = {id: null}

    constructor(props) {
        super(props);
        this.post = this.props.post
    }

    render() {
        return (
            <div>
                <p>{this.post.id} - {this.post.body}</p>
                {
                    this.state.id ? <Comments id={this.state.id}/> : null}
                <button onMouseUp={() => {
                    this.state.id === null ? this.setState({id: this.post.id}) : this.setState({id: null})
                }}>Comments</button>
            </div>
        );
    }
}

export {Post};