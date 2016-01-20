import * as actionTypes from './constants/actionTypes';

export addUserPlan(userPlan) {
  return {
    type: actionTypes.ADD_USER_PLAN,
    userPlan,
  };
}

export addVideo(video) {
  return {
    type: actionTypes.ADD_VIDEO,
    video,
  };
}
