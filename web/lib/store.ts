import { combineReducers, createStore } from '@reduxjs/toolkit';
import navigation from './slices/navigation';
import tree from './slices/tree';

const rootReducer = combineReducers({
  navigation,
  tree,
});

export default createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
