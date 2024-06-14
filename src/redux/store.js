import { createStore, combineReducers } from 'redux';

// Dummy reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.books;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  books: booksReducer
});

// Create store
const store = createStore(rootReducer);

export default store;
