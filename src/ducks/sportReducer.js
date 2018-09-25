// Constants
const UPDATE_SPORT = "UPDATE_SPORT";

// Action Creators
export function updateSport(sport) {
  return {
    type: UPDATE_SPORT,
    payload: sport
  };
}

// Initial State
const initialState = {
  sport: "baseball"
};

// Reducer
// export default function foodReducer(state = initialState) {
//   return state;
// }

export default function sportReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SPORT:
      return {
        ...state,
        sport: action.payload
      };
    default:
      return state;
  }
}
