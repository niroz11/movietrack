import { combineReducers } from "redux";
import { nowPlayingMoviesReducer,topRatedMoviesReducer } from '../reducers/nowPlayingMoviesReducer'

export const rootReducer = combineReducers({
    nowPlayingMovies: nowPlayingMoviesReducer,
    topRatedMovies: topRatedMoviesReducer
})