export const userReducer = (state=[],action) => {
    switch(action.type){
        case "UPDATE_USER":
        console.log(action.id, "action id")
            return {
                id: action.id,
                name: action.name
                
            }
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