import styled from '@emotion/styled';
import React from 'react';
import CircleButton from '../../atoms/CircleButton';
import StickyComponent from '../../atoms/StickyComponent';

const PostLikeShareButton = () => {
  return (
    <PostLikeShareStickyBox top={433} left={30}>
      <CircleButton key={1} />
      <CircleButton key={2} />
    </PostLikeShareStickyBox>
  );
};

const PostLikeShareStickyBox = styled(StickyComponent)`
  padding: 0.5rem;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default PostLikeShareButton;
