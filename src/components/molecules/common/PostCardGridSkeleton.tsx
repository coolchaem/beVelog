import React from 'react';
import { PostCardGridLayout } from './PostCardGrid';
import PostCardSkeleton from './PostCardSkeleton';

const PostCardGridSkeleton = () => {
  return (
    <PostCardGridLayout>
      {Array.from({ length: 8 }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </PostCardGridLayout>
  );
};

export default PostCardGridSkeleton;
