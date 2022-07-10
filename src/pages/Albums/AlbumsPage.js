import React, {useState} from 'react';

import {SetAxiosItem} from "../../functions/SetAxiosItem";
import {axiosJsonServices} from "../../services/axios.json.services";
import {urls} from "../../constants/urls";
import {Album} from "../../components";

function AlbumsPage(props) {

    return (
        <div>
            {
                SetAxiosItem(axiosJsonServices.getAll(urls.albums),null,[]).map(album => <Album key={album.id} album={album}/>)
            }

        </div>
    );
}

export {AlbumsPage};