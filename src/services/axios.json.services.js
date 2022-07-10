import {axiosService} from "./axiosService";


const axiosJsonServices = {
    getAll: (urls) => axiosService.get(urls),
    getPostComment: (urls, postId) => axiosService.get(`${urls}/${postId}`)
}

export {axiosJsonServices}