import { ProjectActionType } from "../actions/ProjectAction"; 

const projectState = {
  loading: false,
  error: null,
  projects: [],
};

const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case ProjectActionType.FETCH_PROJECT_SUCCESS:
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
    default:
      return state;
  }
};

export default projectReducer;
