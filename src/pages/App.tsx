import React, { useCallback } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import VelogPage from './velog/VelogPage';
import ReadingListPage from './readingList/ReadingListPage';
import SavesPage from './SavesPage';
import SettingPage from './SettingPage';
import PostPage from './home/PostPage';
import WritePage from './WritePage';
import HomePage from './home/HomePage';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import LoginPage from './LoginPage';
import NotFoundPage from './error/NotFoundPage';
import TrendingPostsPage from './home/TrendingPostsPage';
import RecentPostsPage from './home/RecentPostsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from '@emotion/react';
import globalStyles from '../styles/GlobalStyles';
import { enableDarkMode, enableLightMode, setSystemThemeMode } from '../redux/reducers/ThemeSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(state => state.themeState);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const systemPrefersDark = darkMediaQuery.matches;
    dispatch(setSystemThemeMode(systemPrefersDark ? 'dark' : 'light'));

    darkMediaQuery.addEventListener('change', e => {
      dispatch(setSystemThemeMode(e.matches ? 'dark' : 'light'));
    });
  }, [dispatch]);

  useEffect(() => {
    if (themeMode.userThemeMode !== 'default') {
      document.body.dataset.theme = themeMode.userThemeMode;
    }
  }, [themeMode]);

  // 쿠키에 저장된 사용자 선호 테마를 store 에 저장, 재접속 할때 유지
  const loadTheme = useCallback(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) return;
    if (theme === 'dark') {
      dispatch(enableDarkMode());
    } else {
      dispatch(enableLightMode());
    }
    document.body.dataset.theme = theme;
  }, [dispatch]);

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />}>
            <Route path="trending" element={<TrendingPostsPage />} />
            <Route path="recent" element={<RecentPostsPage />} />
          </Route>
          <Route path="@:userId/*" element={<VelogPage />} />
          <Route path="write" element={<WritePage />} />
          <Route path="saves" element={<SavesPage />} />
          <Route path="lists" element={<ReadingListPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <Global styles={globalStyles} />
    </>
  );
};

export default App;
