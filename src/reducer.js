// export const initState = {
//     users: [],
//     popularplayer: []
// }
// const reducer = (state = initState, action) => {

//     return state
// }
// export default reducer;



import * as actions from "./actionTypes";
export const initState = {
    users: [],
    popularplayer: [],
}
const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.ADD_USER:
            console.log(state.users)
            return { ...state, users: [...state.users, action.payload], }
            

        default:
            return state;
    }
    
}
export default reducer;



