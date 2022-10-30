import axios from "axios";
import * as actionTypes from '../actionTypes'

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
            console.log('projects',resp)
            dispatch({ type: ProjectActionType.FETCH_PROJECT_SUCCESS, payload: resp.data.projects})
        })
        // try{
        //     const res =  axios.get('/api/projects');
        //     const { posts } = res;
        //     dispatch({ type: FetchProjectAction.FETCH_PROJECT_SUCCESS, payload: posts})
        // }
        // catch(error){
        //     if(error.response){
        //         dispatch({
        //             type: ProjectActionType.FETCH_PROJECT_FAIL,
        //             payload: error.response.data.message,
        //         });
        //     }
        // }
    }
}

export {
    FetchProjectAction,
    ProjectActionType,
}