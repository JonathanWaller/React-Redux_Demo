import { createStore, combineReducers } from "redux";

// Import all of your reducers
import foodReducer from "./ducks/foodReducer";
import sportReducer from "./ducks/sportReducer";

// create combinedReducer if using more than one reducer
const combinedReducer = combineReducers({
  foodReducer: foodReducer,
  sport: sportReducer
});

// Use below if just using one reducer
// const store = createStore(foodReducer);

// Use below if using multiple reducers
const store = createStore(combinedReducer);

export default store;
