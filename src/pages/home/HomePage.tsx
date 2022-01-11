import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeTab from '../../components/molecules/common/HomeTab';
import Header from '../../components/organisms/main/Header';
import NotFoundPage from '../error/NotFoundPage';
import RecentPostsPage from './RecentPostsPage';
import TrendingPostsPage from './TrendingPostsPage';

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeTab />
      <Routes>
        <Route path="/" element={<TrendingPostsPage />} />
        <Route path="recent" element={<RecentPostsPage />} />
      </Routes>
    </>
  );
};

export default HomePage;
