import React from 'react';
import MoonIcon from 'assets/icon-moon.svg';
import SunIcon from 'assets/icon-sun.svg';

import theme from '../../styles/Theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { enableDarkMode, enableLightMode } from '../../redux/reducers/ThemeSlice';

const ThemeToggleButton = () => {
  const dispatch = useAppDispatch();
  const storeThemeMode = useAppSelector(state => state.themeState);

  const getThemeMode = () => {
    if (storeThemeMode.systemThemeMode === 'default') {
      return 'light';
    }
    if (storeThemeMode.userThemeMode !== 'default') {
      return storeThemeMode.userThemeMode;
    }
    return storeThemeMode.systemThemeMode;
  };

  const themeMode = getThemeMode();

  const toggleThemeMode = () => {
    if (themeMode === 'dark') {
      dispatch(enableLightMode());
      localStorage.setItem('theme', 'light');
      return;
    }
    dispatch(enableDarkMode());
    localStorage.setItem('theme', 'dark');
  };

  return (
    <button
      css={{
        background: 'none',
        color: `${theme.text1}`,
        '&:hover': {
          background: `${theme.slight_layer}`,
        },
      }}
      onClick={toggleThemeMode}
    >
      {themeMode === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggleButton;
