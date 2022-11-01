import * as actionTypes from '../actionTypes'
import axios from 'axios'
import { swerroralert } from '../../components/Alerts'

const FetchMessagesAction = ()=>{
    return (dispatch)=>{
        dispatch({type: actionTypes.FETCH_MESSAGES_REQUEST})
        const auth = localStorage.getItem('auth')
        const authParsed = JSON.parse(auth)
        axios({
            headers: {
             Authorization: `Bearer ${authParsed.user}`
            },
            method: 'GET',
            url: '/api/messages'
        }).then((resp)=>{
            dispatch({type: actionTypes.FETCH_MESSAGES_SUCCESS, payload: resp.data.messages})
        }).catch((error)=>{
            swerroralert(error.message)
        })
    }
}

export {
    FetchMessagesAction
}