import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { API_HOST } from '../../../constant';
import { Post } from '../../../types/Post';
import TempThumbnail from '../../../assets/thumbnail.jpeg';

const PostViewer = () => {
  const [post, setPost] = useState<Post>({} as Post);
  const { userId, urlSlug } = useParams<{ userId: string; urlSlug: string }>();

  useEffect(() => {
    axios({ baseURL: API_HOST, url: `/@${userId}/${urlSlug}` })
      .then(response => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId, urlSlug]);

  return (
    <>
      <PostHeaderBox>
        <PostHeaderTitle>{post.title}</PostHeaderTitle>
        <UserInfoBox>
          <Link to={`/@${userId}`}>{userId}</Link>
          <span> - </span>
          <span>{post.released_at || '2021년 12월 20일'}</span>
        </UserInfoBox>
        <Thumnail src={TempThumbnail} />
      </PostHeaderBox>
      <PostBodyBox>
        <div>{post.body}</div>
      </PostBodyBox>
    </>
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
  max-width: 100%;
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

export default PostViewer;
