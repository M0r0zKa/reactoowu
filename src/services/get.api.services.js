class GetApiServices {
    _url = 'https://jsonplaceholder.typicode.com'

    getUsers(){
        return fetch(`${this._url}/users`)
            .then(value => value.json())
    }
    getPosts(){
        return fetch(`${this._url}/posts`)
            .then(value => value.json())
    }
    getComments(id){
        return fetch(`${this._url}/posts/${id}/comments`)
            .then(value => value.json())
    }

}

export {GetApiServices};