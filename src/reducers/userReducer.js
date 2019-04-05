export const userReducer = (state = '', action) => {
    console.log(action.type, "action id")
    switch (action.type) {
        case "UPDATE_USER":
            return action.id
        case "LOGOUT_USER":
            return {
                id: "",
                name: "",
                favorites: []
            }
        default:
            return state;
    }
}