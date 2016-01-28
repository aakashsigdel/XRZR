import { ADD_USER_PLAN } from '../constants/actionTypes';

export default function userPlans (state = {}, action) {
  switch (action.type) {
    case ADD_USER_PLAN:
      let addition = {};
      let newItemId = Object.keys(state).length + 1;

      addition[newItemId] = {
        id:newItemId,
        exerciseId: action.exerciseId,
        videoId: action.videoId,
        updateAt: Date.now(),
        updatedBy: action.updatedBy,
      }

      return {
        ...state,
        ...addition,
      };
    default:
      return state;
  }
}


