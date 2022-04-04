import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import TempThumbnail from '../../../assets/thumbnail.jpeg';

interface PostHeaderProps {
  title: string;
  userName: string;
  date: string;
}

const PostHeader = (prop: PostHeaderProps) => {
  return (
    <PostHeaderBox>
      <PostHeaderTitle>{prop.title}</PostHeaderTitle>
      <UserInfoBox>
        <Link to={`/@${prop.userName}`}>{prop.userName}</Link>
        <span> · </span>
        <span>{prop.date || '2021년 12월 20일'}</span>
      </UserInfoBox>
      <Thumnail alt="Post Thumbnail" src={TempThumbnail} />
    </PostHeaderBox>
  );
};

const PostHeaderBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PostHeaderTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const UserInfoBox = styled.div`
  font-size: 1rem;
`;

const Thumnail = styled.img`
  margin: 3rem auto;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

export default PostHeader;
