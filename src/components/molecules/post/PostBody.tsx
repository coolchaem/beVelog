import styled from '@emotion/styled';
import React from 'react';
import ViewBody from '../../organisms/post/ViewBody';
import PostLikeShareButton from './PostLikeShareButton';

interface PostBodyProp {
  body: string;
  likeCount: number;
}

const PostBody = (prop: PostBodyProp) => {
  const testBody = (
    <span>
      sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss sss
      <br />
      ssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      sssssss
      <br />
      ssssss
    </span>
  );
  return (
    <PostLayout>
      <PostLikeShareButton likeCount={prop.likeCount} liked={false} />
      <PostBodyBox>{testBody || <ViewBody body={prop.body} />}</PostBodyBox>
    </PostLayout>
  );
};

const PostLayout = styled.div`
  display: flex;
`;

const PostBodyBox = styled.div`
  margin: 5rem auto 0px;
  width: 768px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default PostBody;
