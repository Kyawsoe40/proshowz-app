import axios from "axios";

export const api_key='f8ba39ee36adc2edf251aca6d8956135';

export const api=axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})