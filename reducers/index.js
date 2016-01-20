const initialState = {
  exercises: [
    {
      title: 'Push up Heavy Metal',
      photo: '',
    },
    {
      title: 'Moving metal out of the house',
      photo: '',
    },
    {
      title: 'Pull metal back in again',
      photo: '',
    },
  ],
  userPlans: [],
  videos: [],
  uiState: {},
}

const xrzrApp = combineReducer({
  exercises,
  userPlans,
  videos,
  uiState,
});

export default xrzrApp;
