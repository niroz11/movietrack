const nowPlayingMoviesReducer = (state=[],action) => {
    switch(action.type){
        case "NOW_PLAYING":
            return action.nowPlayingMovies
        default:
            return state

    }
}