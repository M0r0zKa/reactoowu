import React from 'react';

import {Link, Route, Routes} from "react-router-dom";
import {TodoPage} from "./pages/Todo/TodoPage";
import {AlbumsPage} from "./pages/Albums/AlbumsPage";
import {CommentsPage} from "./pages/Comments/CommentsPage";
import {CommentPostsPage} from "./pages/CommentPostsPage";




function App(props) {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/todo'}>Todo</Link></li>
                    <li><Link to={'/albums'}>Albums</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'todo'} element={<TodoPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<CommentPostsPage/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;
