export const nowPlayingMovies = (movies) => ({
    type: "NOW_PLAYING",
    movies
})

export const topRatedMovies = (movies) => ({
    type: "TOP_RATED",
    movies
})

export const popularMovies = (movies) => ({
    type: "POPULAR_MOVIES",
    movies
})

export const updateUser = (id,email,favorites) => ({
    type: "UPDATE_USER",
    id,
    email, 
    favorites

})

export const logOutUser = () => ({
    type: "LOGOUT_USER"
})