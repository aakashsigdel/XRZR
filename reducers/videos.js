function videos (state = [], action) {
  switch (action.type) {
    case ADD_VIDEO:
      return [
        ...state,
        {
          videoURL: action.videoURL,
          videoLength: action.videoLength,
        }
      ];
    default:
      return state;
  }
}

