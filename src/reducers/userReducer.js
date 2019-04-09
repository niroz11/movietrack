export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return {
                id: action.id,
                email: action.email,
                favorites: action.favorites
            }
        case "LOGOUT_USER":
            return {
                id: "",
                email:"",
                favorites: []
            }
        default:
            return state;
    }
}