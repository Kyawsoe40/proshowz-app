import { ActionTypes } from "../../actions/action_types"

const initialState= {
    popularMovies : [],
    newMovies : [],
    movies : [],
    sectionMovies : [],
    trendMovies: [],
    similarMovies: [],
    searchMovies: [],
    genres: [],
    movie : {},
    reviews : [],
}

export const movieReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case ActionTypes.FETCH_MOVIES : return{
            ...state,
            movies: payload
        }
        case ActionTypes.FETCH_SECTION_MOVIES : return{
            ...state,
            sectionMovies: payload
        }
        case ActionTypes.FETCH_POPULAR_MOVIES : return{
            ...state,
            popularMovies: payload
        }
        case ActionTypes.FETCH_NEW_MOVIES : return{
            ...state,
            newMovies: payload
        }
        case ActionTypes.FETCH_TREND_MOVIES : return{
            ...state,
            trendMovies: payload
        }
        case ActionTypes.FETCH_SIMILAR_MOVIES : return{
            ...state,
            similarMovies: payload
        }
        case ActionTypes.FETCH_SEARCH_MOVIES : return{
            ...state,
            searchMovies: payload
        }
        case ActionTypes.GET_GENRES : return{
            ...state,
            genres: payload
        }
        case ActionTypes.SELECTED_MOVIE : return{
            ...state,
            movie : payload
        }
        case ActionTypes.DELETE_SELECTED_MOVIE : return{
            ...state,
            movie : {}
        }
        case ActionTypes.DELETE_SECTION_MOVIES : return{
            ...state,
            sectionMovies : []
        }
        case ActionTypes.DELETE_SEARCH_MOVIES : return{
            ...state,
            searchMovies : []
        }
        case ActionTypes.FETCH_REVIEWS : return{
            ...state,
            reviews : payload
        }
        case ActionTypes.DELETE_REVIEWS : return{
            ...state,
            reviews : []
        }

        default : return state
    }
}