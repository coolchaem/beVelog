import React from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import {
  PostCardLayout,
  PostCardContentBox,
  PostCardUserInfoBox as PostCardUserInfoBox,
} from './PostCard';

const PostCardSkeleton = () => {
  return (
    <PostCardSkeletonLayout>
      <SkeletonBox width="100%" height="167px" />
      <PostCardContentBox>
        <SkeletonBox width="100%" marginBottom="0.3rem" />
        <SkeletonBox width="100%" height="5rem" marginBottom="1.5rem" />
        <div className="sub-info">
          <span>
            <SkeletonBox width="3rem" marginRight="0.5rem" />
          </span>
          <span>
            <SkeletonBox width="4rem" />
          </span>
        </div>
      </PostCardContentBox>
      <PostCardUserInfoBox>
        <SkeletonBox width="1.5rem" height="1.5rem" marginRight="0.5rem" />
        <span>
          <SkeletonBox width="6rem" height="1.5rem" />
        </span>
      </PostCardUserInfoBox>
    </PostCardSkeletonLayout>
  );
};

export default PostCardSkeleton;

const PostCardSkeletonLayout = styled(PostCardLayout)``;

const shining = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const SkeletonBox = styled.div<{
  width?: string;
  height?: string;
  marginRight?: string;
  marginBottom?: string;
}>`
  background: lightgray;
  animation: ${shining} 1s ease-in-out infinite;
  display: inline-block;
  border-radius: 4px;
  height: 1em;
  ${props =>
    css`
      width: ${props.width};
      height: ${props.height};
      margin-right: ${props.marginRight};
      margin-bottom: ${props.marginBottom};
    `}
`;
