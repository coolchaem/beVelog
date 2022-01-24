import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const timeFrameMap = {
  day: '오늘',
  week: '이번 주',
  month: '이번 달',
  year: '올해',
};

export type TimeFrame = keyof typeof timeFrameMap;

export interface HomeState {
  timeFrame: TimeFrame;
}

const initialState: HomeState = {
  timeFrame: 'week',
};

export const HomeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    select(state, action: PayloadAction<TimeFrame>) {
      state.timeFrame = action.payload;
    },
  },
});

export const { select } = HomeSlice.actions;

export const homeState = (state: RootState) => state.homeState;

export default HomeSlice.reducer;
