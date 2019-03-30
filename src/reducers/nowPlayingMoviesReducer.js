export const nowPlayingMoviesReducer = (state=[],action) => {
    
    switch(action.type){
        case "NOW_PLAYING":
            return action.movies
        default:
            return state
    }
}

export const topRatedMoviesReducer = (state=[],action) => {
    switch(action.type){
        case "TOP_RATED":
            return action.movies
        default:
            return state
    }
}

export const popularMoviesReducer = (state=[],action) => {
    switch(action.type){
        case "POPULAR_MOVIES":
            return action.movies
        default:
            return state
    }
}