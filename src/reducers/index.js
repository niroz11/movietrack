import { combineReducers } from "redux";
import { nowPlayingMoviesReducer } from '../reducers/nowPlayingMoviesReducer'

export const rootReducer = combineReducers({
    nowPlayingMovies: nowPlayingMoviesReducer 
})