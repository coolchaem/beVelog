import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Write } from '../../types/Write';
import type { RootState } from '../store';

export const initialState: Write = {
  body: '당신의 이야기를 적어보세요...!',
  title: '',
  thumbnail: '',
};

export const WriteSlice = createSlice({
  name: 'writeState',
  initialState,
  reducers: {
    setWriteState: (state, action: PayloadAction<Write>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setWriteState } = WriteSlice.actions;

export const writeState = (state: RootState) => state.writeState;

export default WriteSlice.reducer;
