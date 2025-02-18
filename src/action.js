import * as actions from "./actionTypes"
import { userApi } from "./assets/api"


// export const funcname=()=>{
//     return async(dispatch)=>{
//         const url= 'api';
//         const options={

//         }
//     }
//     try{
//     const response = await fetch(url, options);
//     const result = await response.text();
//     dispatch(
//         ((player)=>{
//             return{
//             type:actions.GET_POPULAR_PLAYER,
//             payload:player,
//             }
//         })(result)
// )
//     }
//     catch(error){
// console.log(error)
//     }
// }


export const onAddUser = (user) => {
    return {
        type: actions.ADD_USER,
        payload: user
    }
}

export const deleteScore = (id) => {
    return {
        type: actions.DELETE_SCORE,
        payload: id
    }
}

export const getPopularPlayer = () => {
return async (dispatch)=>{
    const url = userApi;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': 'aca5e54cd5msh2fb3ce0596b27a6p1e8539jsn35294e5d2ee3',
    //         'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    //     }
    // };

    try {
        const response = await fetch(url)
        // , options);
        const result = await response.json();

        console.log(result.users)
        dispatch(
            ((popularplayer)=>{
                return{
                type:actions.GET_POPULAR_PLAYER,
                payload:popularplayer,
                }
            })(result.users)
    )} catch (error) {
        console.error(error);
    }
}
}


