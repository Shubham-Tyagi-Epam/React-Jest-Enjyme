import { successReducer } from "./reducers/successReducer";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { guessedWordsReducers } from "./reducers/guessedWordsReducers";

const rootReducer = {
  successReducer,
  guessedWordsReducers,
};

let initialState = {
  success: false,
};

const store = createStore(rootReducer, initialState, devToolsEnhancer());
