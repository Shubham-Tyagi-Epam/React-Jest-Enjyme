import { applyMiddleware, combineReducers, createStore } from "redux";
import { guessedWordsReducers } from "./reducers/guessedWordsReducers";
import { secretWordReducer } from "./reducers/secretWordReducer";
import { successReducer } from "./reducers/successReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/**
 * Function that returns a node from the virtual DOM which enzymes uses for testing.
 * @function
 * @param {*} wrapper - the wrapper or the tree under which we need to find a particular node.
 * @param {*} attr - Selects the dom node on the basis of attribute
 * @returns - a node from DOM
 */
export function findByAttr(wrapper, attr) {
  return wrapper.find(`[data-test="${attr}"]`);
}

// let initialState = {
//   success: false,
//   secretWord: 'Party',
//   guessedWords: []
// }
let middelWare = [thunk];

export function storeFactory(iniState) {
  let rootReducer = combineReducers({
    success: successReducer,
    secretWord: secretWordReducer,
    guessedWords: guessedWordsReducers,
  });
  let initialState = iniState;
  let store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelWare))
  );
  return store;
}
