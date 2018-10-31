const initialState = {
    user: null,
    show: false,
    product: {}
}

const UPDATE_USER = 'UPDATE_USER';
const CHANGE_SHOW = 'CHANGE_SHOW';
const PRODUCT_SET = 'PRODUCT_SET';

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USER:
        return {...state, user: action.payload}

        case CHANGE_SHOW:
        return {...state, show: action.payload}

        case PRODUCT_SET:
        console.log(action.payload)
        return {...state, product: action.payload}

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
export function setProduct(obj){
    return {
        type: PRODUCT_SET,
        payload: obj
    }
    
}