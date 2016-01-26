import * as actionTypes from '../constants/actionTypes';

export function addUserPlan(exerciseId) {
  return {
    type: actionTypes.ADD_USER_PLAN,
    exerciseId: exerciseId,
    videoId: "",
    updatedBy: "me me"

  };
}

export function addVideo(video) {
  return {
    type: actionTypes.ADD_VIDEO,
    video,
  };
}
