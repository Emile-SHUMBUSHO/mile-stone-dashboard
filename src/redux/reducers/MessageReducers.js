import * as actionTypes from '../actionTypes'

const messageReducers = (state={}, action)=>{
    switch (action.type){
        case actionTypes.FETCH_MESSAGES_REQUEST:{
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.FETCH_MESSAGES_SUCCESS:{
            return {
                ...state,
                loading: false,
                messages: action.payload
            }
            }
        default:
            return state
    }
}

export default messageReducers