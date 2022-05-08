import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

type NavigationStateType = {
  context: string,
};

const navigationSlice: Slice = createSlice({
  name: 'navigation',
  initialState: {
    context: 'none',
  } as NavigationStateType,
  reducers: {
    setContext: (state: NavigationStateType, action: PayloadAction<string>) => {
      state.context = action.payload;
    },
  },
});

export const {
  setContext,
} = navigationSlice.actions;

export default navigationSlice.reducer;
