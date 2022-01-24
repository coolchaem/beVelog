import styled from '@emotion/styled';
import React from 'react';
import { PartialPost } from '../../../types/Post';
import PostCard from './PostCard';

interface PostCardGridProps {
  posts?: PartialPost[];
}
const PostCardGrid = ({ posts }: PostCardGridProps) => {
  return (
    <PostCardGridLayout>
      {posts?.map((post: PartialPost, index: number) => {
        return <PostCard post={post} key={`${post.title}_${index}`} />;
      })}
    </PostCardGridLayout>
  );
};

export default PostCardGrid;

export const PostCardGridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
