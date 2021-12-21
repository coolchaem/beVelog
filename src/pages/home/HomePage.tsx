import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../../components/organisms/main/Header';
import NotFoundPage from '../error/NotFoundPage';
import RecentPostsPage from './RecentPostsPage';
import TrendingPostsPage from './TrendingPostsPage';

const HomePage = () => {
  return (
    <>
      <Header />
      <div>홈 페이지 입니다.</div>
      <ul>
        <Link to="">
          <li>트렌딩</li>
        </Link>
        <Link to="recent">
          <li>최신</li>
        </Link>
      </ul>
      <Routes>
        <Route index element={<TrendingPostsPage />} />
      </Routes>
    </>
  );
};

export default HomePage;
