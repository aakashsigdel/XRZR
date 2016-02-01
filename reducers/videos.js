import { ADD_VIDEO } from '../constants/actionTypes';
export default function videos (state = {}, action) {
  switch (action.type) {
    case ADD_VIDEO:
      let newItemId = Object.keys(state).length + 1;
      return {
        ...state,
        ...{[newItemId]: {
          id: newItemId,
          videoURL: action.videoURL,
          videoLength: action.videoLength,
        }}
      };
    default:
      return state;
  }
}
