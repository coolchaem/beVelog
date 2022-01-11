import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Write } from '../../types/Write';
import type { RootState } from '../store';

const initialState: Write = {
  body: '당신의 이야기를 적어보세요...!',
  title: '',
  thumbnail: '',
};

export const WriteSlice = createSlice({
  name: 'writeState',
  initialState,
  reducers: {
    setBody: (state, action: PayloadAction<Write>) => {
      Object.assign(state, action.payload);
    },
    setTitle: (state, action: PayloadAction<Write>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setBody, setTitle } = WriteSlice.actions;

export const writeState = (state: RootState) => state.writeState;

export default WriteSlice.reducer;
