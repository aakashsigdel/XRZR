import { ADD_USER_PLAN } from '../constants/actionTypes';

export default function userPlans (state = [], action) {
  switch (action.type) {
    case ADD_USER_PLAN:
      return [
        ...state,
        {
          exerciseId: action.exerciseId,
          videoId: action.videoId,
          updateAt: Date.now(),
          updatedBy: action.updatedBy,
        }
      ];
    default:
      return state;
  }
}

