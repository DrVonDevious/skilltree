import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { Branch } from '../typings';

type TreeStateType = {
  currentTreeBranches: Branch[],
};

const treeSlice: Slice = createSlice({
  name: 'tree',
  initialState: {
    currentTreeBranches: [],
  } as TreeStateType,
  reducers: {
    setCurrentTreeBranches: (
      state: TreeStateType,
      action: PayloadAction<Branch[]>,
    ) => {
      state.currentTreeBranches = action.payload;
    },
  },
});

export const {
  setCurrentTreeBranches,
} = treeSlice.actions;

export default treeSlice.reducer;
