import axios from "axios";

export const api_key='a6fd13d8fb407e7b1c512ddd51e6ffb5';

export const api=axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})