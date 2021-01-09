import {authAPI} from './../api/api';
const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthData = (userId, email, login) => ({type: SET_AUTH_DATA, data: {userId, email, login}})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthData(id, email, login));
        }
    });
}

export default authReducer;