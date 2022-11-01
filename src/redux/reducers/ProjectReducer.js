import { ProjectActionType } from "../actions/ProjectActions"; 
import * as actionTypes from '../actionTypes'

const projectState = {
  loading: false,
  error: null,
  projects: [],
};

const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT_REQUEST:
      return {...state, loading:true}
    case ProjectActionType.FETCH_PROJECT_SUCCESS:
      console.log('reducers', action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        projects: action.payload
      };
      case ProjectActionType.FETCH_PROJECT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      case actionTypes.PROJECT_DELETE_REQUEST:
        return {
          ...state,
          deleting: true
        }
      case actionTypes.PROJECT_DELETE:
        return {
          ...state,
          deleting: false,
          deleted: true
        }
      case actionTypes.PROJECT_DELETE_FAILED:
        return {
          ...state,
          deleting: false
        }
    default:
      return state;
  }
};

export default projectReducer;
