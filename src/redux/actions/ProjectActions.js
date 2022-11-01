import axios from "axios";
import * as actionTypes from '../actionTypes'
import { swerroralert, swsuccalert } from "../../components/Alerts";

const ProjectActionType = {
    FETCH_PROJECT_SUCCESS: "FETCH_PROJECT_SUCCESS",
    FETCH_PROJECT_FAIL: "FETCH_PROJECT_FAIL",
}

const FetchProjectAction = ()=> {
    return  (dispatch)=>{
        dispatch({type: actionTypes.PROJECT_REQUEST})
        axios({
            method: 'GET',
            url: '/api/projects'

        }).then((resp)=>{
            dispatch({ type: ProjectActionType.FETCH_PROJECT_SUCCESS, payload: resp.data.projects})
        })
        
    }
}

const UpdateProjectAction = (id, dataObj, navigate)=>{
    return (dispatch)=>{
        const auth = localStorage.getItem('auth')
        const authParsed = JSON.parse(auth)
        const bodyFormData = new FormData()
        bodyFormData.append('image', dataObj.image)
        bodyFormData.append('title', dataObj.title)
        bodyFormData.append('description', dataObj.description)
        axios({
            headers: {
                Authorization: `Bearer ${authParsed.user}`,
                "Content-Type": "multipart/form"
            },
            method: 'PUT',
            url: `/api/projects/${id}`,
            data: bodyFormData
        }).then((resp)=>{
            if(resp.data.status === 200){
                swsuccalert(resp.data.message)
                dispatch(FetchProjectAction())
            }else{
                swerroralert(resp.data.message)
            }
            
        }).catch((error)=>{
            swerroralert(error.message)
        })
    }
}

const DeleteProjectAction = (id)=>{
    return(dispatch)=>{
        dispatch({type: actionTypes.PROJECT_DELETE_REQUEST})
        const auth = localStorage.getItem('auth')
        const authParsed = JSON.parse(auth)
        axios({
            headers: {
                Authorization: `Bearer ${authParsed.user}`
            },
            method: 'DELETE',
            url: `/api/projects/${id}`,
        }).then((resp)=>{
            swsuccalert(resp.data.message)
            dispatch({type: actionTypes.PROJECT_DELETE})
            dispatch(FetchProjectAction())
        }).catch((error)=>{
            dispatch({type: actionTypes.PROJECT_DELETE_FAILED})
            swerroralert(error.message)
        })
    }
}

export {
    FetchProjectAction,
    ProjectActionType,
    UpdateProjectAction,
    DeleteProjectAction
}