import { combineReducers } from "redux";
import { nowPlayingMoviesReducer, topRatedMoviesReducer, popularMoviesReducer } from '../reducers/nowPlayingMoviesReducer'
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    nowPlayingMovies: nowPlayingMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    popularMovies: popularMoviesReducer,
    user: userReducer,
})