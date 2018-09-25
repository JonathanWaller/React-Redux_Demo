// Constant
const UPDATE_FOOD = "UPDATE_FOOD";

// Action Creator
export function updateFood(food) {
  return {
    type: UPDATE_FOOD,
    payload: food
  };
}

// Initial State
const initialState = {
  food: "pizza"
};

// Reducer
// If you just want to connect state from Redux to a component, without including any functions, you can write
// a simple export statement, like below:
// export default function foodReducer(state = initialState) {
//   return state;
// }

// Expanding the export statement to include updateFood switch case
export default function foodReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FOOD:
      return {
        ...state,
        food: action.payload
      };
    default:
      return state;
  }
}
