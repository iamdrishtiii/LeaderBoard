import * as actions from "./actionTypes"

export const onAddUser = (user) => {
    return {
        type: actions.ADD_USER,
        payload: user,
    }
}