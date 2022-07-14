import React from 'react';

import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout/main/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostPage} from "./pages/PostPage";


function App(props) {
    return (
        <div>
            <MainLayout/>
            <div>
                <Routes>
                    <Route path={'/'} element={<UsersPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostPage/>}>
                    </Route>
                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;
