import axios from "axios";

const ProjectActionType = {
    FETCH_PROJECT_SUCCESS: "FETCH_PROJECT_SUCCESS",
    FETCH_PROJECT_FAIL: "FETCH_PROJECT_FAIL",
}

const FetchProjectAction = ()=> {
    return async (dispatch)=>{
        try{
            const res = await axios.get('/api/posts');
            const { posts } = res;
            dispatch({ type: FetchProjectAction.FETCH_PROJECT_SUCCESS, payload: posts})
        }
        catch(error){
            if(error.response){
                dispatch({
                    type: ProjectActionType.FETCH_PROJECT_FAIL,
                    payload: error.response.data.message,
                });
            }
        }
    }
}

export {
    FetchProjectAction,
    ProjectActionType,
}