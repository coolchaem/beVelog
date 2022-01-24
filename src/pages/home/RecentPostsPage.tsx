import React from 'react';
import PostCardGrid from '../../components/molecules/common/PostCardGrid';
import PostCardGridSkeleton from '../../components/molecules/common/PostCardGridSkeleton';
import useLoadPost from '../../hooks/useLoadPost';

const RecentPostsPage = () => {
  const [targetRef, isLoading, isDone, posts] = useLoadPost('recentPosts');
  return (
    <>
      <PostCardGrid posts={posts} />
      {isLoading && !isDone && <PostCardGridSkeleton />}
      {!isLoading && (
        <div
          ref={targetRef}
          style={{
            width: '100%',
            height: '5rem',
          }}
        />
      )}
    </>
  );
};

export default RecentPostsPage;
