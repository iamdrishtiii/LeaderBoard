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
            return { ...state, users: [...state.users, action.payload], }

        case actions.DELETE_SCORE:
            return { ...state, users: state.users.filter((val) => val.userId != action.payload) }

        case actions.GET_POPULAR_PLAYER:
            return { ...state , popularplayer:action.payload }
        default:
            return state;
    }

}
export default reducer;



