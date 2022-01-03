import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserPage from './UserPage';
import ArticlePage from './ArticlePage';
import SeriesPage from './SeriesPage';
import { useParams } from 'react-router';
import PostPage from '../home/PostPage';
import NotFoundPage from '../error/NotFoundPage';

const VelogPage = () => {
  const { userId } = useParams<{ userId: string }>();
  return (
    <div>
      {`내 벨로그 페이지 입니다. userId : ${userId}`}
      <br />
      <ul>
        <li>
          <Link to="">글</Link>
        </li>
        <li>
          <Link to="series">시리즈</Link>
        </li>
        <li>
          <Link to="about">소개</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path=":urlSlug" element={<PostPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="about" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default VelogPage;
