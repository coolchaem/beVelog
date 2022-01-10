import styled from '@emotion/styled';
import React from 'react';

interface PostBodyProp {
  body: string;
}

const PostBody = (prop: PostBodyProp) => {
  return (
    <PostBodyBox>
      <div>{prop.body}</div>
    </PostBodyBox>
  );
};

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
