import styled from '@emotion/styled';
import React, { useEffect, useMemo, useState } from 'react';
import CircleButton from '../../atoms/CircleButton';
import StickyComponent from '../../atoms/StickyComponent';
import LikeIcon from '../../../assets/likeIcon.svg';

interface PostLikeSharebuttonProps {
  likeCount: number;
  liked: boolean;
}

const PostLikeShareButton = (prop: PostLikeSharebuttonProps) => {
  const [liked, setLiked] = useState(prop.liked);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <PostLikeShareStickyBox top={10} left={1}>
      <CircleButton onClick={handleLikeToggle} active={liked}>
        <LikeIcon fill={liked ? 'red' : 'gray'} />
      </CircleButton>
      <div>{prop.likeCount}</div>
      <CircleButton />
    </PostLikeShareStickyBox>
  );
};

const PostLikeShareStickyBox = styled(StickyComponent)`
  padding: 0.5rem;
  height: 6.5rem;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default PostLikeShareButton;
