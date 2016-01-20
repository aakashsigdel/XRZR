function userPlans (state = [], action) {
  switch (action.type) {
    case ADD_USER_PLAN:
      return [
        ...state,
        {
          exerciseId: action.exerciseId,
          videoId: action.videoId,
          updateAt: Date.now(),
          updateBy: action.updatedBy,
        }
      ];
    default:
      return state;
  }
}

