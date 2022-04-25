import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type ThemeMode = 'dark' | 'light' | 'default';

export interface ThemeModeState {
  userThemeMode: ThemeMode;
  systemThemeMode: ThemeMode;
}

const initialState: ThemeModeState = {
  userThemeMode: 'default',
  systemThemeMode: 'default',
};

export const ThemeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    enableDarkMode(state) {
      state.userThemeMode = 'dark';
    },
    enableLightMode(state) {
      state.userThemeMode = 'light';
    },
    setSystemThemeMode(state, action: PayloadAction<'dark' | 'light'>) {
      state.systemThemeMode = action.payload;
    },
  },
});

export const { enableDarkMode, enableLightMode, setSystemThemeMode } = ThemeSlice.actions;

export const themeState = (state: RootState) => state.themeState;

export default ThemeSlice.reducer;
