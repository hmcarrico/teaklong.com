const initialState = {
    user: null,
    show: false
}

const UPDATE_USER = 'UPDATE_USER';
const CHANGE_SHOW = 'CHANGE_SHOW';

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USER:
        return {...state, user: action.payload}

        case CHANGE_SHOW:
        return {...state, show: action.payload}

        default: 
        return state
    }
}

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}
export function updateShow(bool){
    return {
        type: CHANGE_SHOW,
        payload: bool
    }
}