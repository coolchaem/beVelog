import React from 'react';
import { PostCardGridLayout } from './PostCardGrid';
import PostCardSkeleton from './PostCardSkeleton';

const PostCardGridSkeleton = () => {
  return (
    <PostCardGridLayout id="p_skeleton">
      {Array.from({ length: 8 }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </PostCardGridLayout>
  );
};

export default PostCardGridSkeleton;
