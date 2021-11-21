import React from 'react';
import PostCardGrid from '../../components/molecules/common/PostCardGrid';
import useRecentPosts from './hooks/useRecentPosts';

const RecentPostsPage = () => {
  const posts = useRecentPosts();

  return <PostCardGrid posts={posts} />;
};

export default RecentPostsPage;
