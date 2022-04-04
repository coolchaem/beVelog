import styled from '@emotion/styled';
import React, { useEffect, useMemo, useState } from 'react';
import CircleButton from '../../atoms/CircleButton';
import StickyComponent from '../../atoms/StickyComponent';
import LikeIcon from '../../../assets/likeIcon.svg';

interface PostLikeSharebuttonProps {
  likeCount: number;
  liked: boolean;
  onLikeToggle: () => void;
}

const PostLikeShareButton = (prop: PostLikeSharebuttonProps) => {
  return (
    <PostLikeShareStickyBox top={10} left={1}>
      <CircleButton onClick={prop.onLikeToggle} active={prop.liked}>
        <LikeIcon fill={prop.liked ? 'red' : 'gray'} />
      </CircleButton>
      <div>{prop.likeCount}</div>
      <CircleButton />
    </PostLikeShareStickyBox>
  );
};

const PostLikeShareStickyBox = styled(StickyComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 100%;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default PostLikeShareButton;
