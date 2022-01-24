import styled from '@emotion/styled';
import React from 'react';
import CircleButton from '../../atoms/CircleButton';
import StickyComponent from '../../atoms/StickyComponent';

const PostLikeShareButton = () => {
  return (
    <PostLikeShareButtonLayout>
      <PostLikeShareButtonBox top={112}>
        <CircleButton key={1} />
        <CircleButton key={2} />
      </PostLikeShareButtonBox>
    </PostLikeShareButtonLayout>
  );
};

const PostLikeShareButtonLayout = styled.div`
  position: relative;
  left: -4rem;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PostLikeShareButtonBox = styled(StickyComponent)`
  border-radius: 2rem;
  background: rgb(248, 249, 250);
  border: 1px solid rgb(241, 243, 245);
  padding: 0.5rem;
  align-items: center;
  -webkit-box-align: center;
  flex-direction: column;
  margin: 5rem;
`;

export default PostLikeShareButton;
