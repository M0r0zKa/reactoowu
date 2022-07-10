import axios from "axios";
import {baseURL} from "../constants/urls"

console.log(baseURL);

const axiosService = axios.create({baseURL:baseURL})


export {axiosService}