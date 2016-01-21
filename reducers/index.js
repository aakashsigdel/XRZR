import { combineReducers } from 'redux';
import exercises from './exercises';
import userPlans from './userPlans';
import videos from './videos';
import uiState from './uiState';

const initialState = {
  userPlans: [],
  videos: [],
  uiState: {},
}

const xrzrApp = combineReducers({
  exercises,
  userPlans,
  videos,
  uiState,
});

export default xrzrApp;
