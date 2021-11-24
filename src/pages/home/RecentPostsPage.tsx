import React from 'react';
import PostCardGrid from '../../components/molecules/common/PostCardGrid';
import useRecentPosts from './hooks/useRecentPosts';

const RecentPostsPage = () => {
  const posts = useRecentPosts();

  return (
    <>
      <div> 최신 글 페이지 입니다.</div>
      <PostCardGrid posts={posts} />
    </>
  );
};

export default RecentPostsPage;
