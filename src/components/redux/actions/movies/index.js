import { ActionTypes } from "../action_types"

export const fetchMovies=(movies)=>{
    return {
        type: ActionTypes.FETCH_MOVIES,
        payload: movies
    }
}
export const fetchSectionMovies=(movies)=>{
    return {
        type: ActionTypes.FETCH_SECTION_MOVIES,
        payload: movies
    }
}
export const fetchPopularMovies=(movies)=>{
    return {
        type: ActionTypes.FETCH_POPULAR_MOVIES,
        payload: movies
    }
}
export const fetchNewMovies=(movies)=>{
    return {
        type: ActionTypes.FETCH_NEW_MOVIES,
        payload: movies
    }
}
export const fetchTrendMovies=(movies)=>{
    return {
        type: ActionTypes.FETCH_TREND_MOVIES,
        payload: movies
    }
}
export const fetchSimilarMovies=(movies)=>{
    return {
        type: ActionTypes.FETCH_SIMILAR_MOVIES,
        payload: movies
    }
}
export const fetchSearchMovies=(movies)=>{
    return {
        type: ActionTypes.FETCH_SEARCH_MOVIES,
        payload: movies
    }
}
export const deleteSearchMoives=()=>{
    return {
        type: ActionTypes.DELETE_SEARCH_MOVIE,
        payload: []
    }
}
export const GetGenres=(genres)=>{
    return {
        type: ActionTypes.GET_GENRES,
        payload: genres
    }
}
export const selectedMovie=(movie)=>{
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: movie
    }
}
export const deleteSelectedMoive=()=>{
    return {
        type: ActionTypes.DELETE_SELECTED_MOVIE,
        payload: {}
    }
}
export const deleteSectionMoives=()=>{
    return {
        type: ActionTypes.DELETE_SELECTED_MOVIE,
        payload: []
    }
}
export const fetchReviews=(reviews)=>{
    return {
        type : ActionTypes.FETCH_REVIEWS,
        payload : reviews
    }
}
export const deleteReviews=(reviews)=>{
    return {
        type : ActionTypes.DELETE_REVIEWS,
        payload : []
    }
}
