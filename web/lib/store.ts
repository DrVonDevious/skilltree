import { combineReducers, createStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
