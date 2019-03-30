import { combineReducers } from "redux";
import { nowPlayingMoviesReducer,topRatedMoviesReducer, popularMoviesReducer } from '../reducers/nowPlayingMoviesReducer'

export const rootReducer = combineReducers({
    nowPlayingMovies: nowPlayingMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    popularMovies: popularMoviesReducer
})