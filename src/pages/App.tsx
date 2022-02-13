import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import VelogPage from './velog/VelogPage';
import ReadingListPage from './readingList/ReadingListPage';
import SavesPage from './SavesPage';
import SettingPage from './SettingPage';
import PostPage from './home/PostPage';
import WritePage from './WritePage';
import HomePage from './home/HomePage';
import { useAppSelector } from '../redux/hooks';
import LoginPage from './LoginPage';
import NotFoundPage from './error/NotFoundPage';
import TrendingPostsPage from './home/TrendingPostsPage';
import RecentPostsPage from './home/RecentPostsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from '@emotion/react';
import globalStyles from '../styles/GlobalStyles';

const App = () => {
  const userId = useAppSelector(state => state.userState.id);

  // const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; //boolean

  // function setTheme(theme: 'dark' | 'light') {
  //   // mode = theme;
  //   document.body.dataset.theme = theme;
  // }
  // setTheme(systemPrefersDark ? 'dark' : 'light');

  // window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
  //   setTheme(e.matches ? 'dark' : 'light');
  // });

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
