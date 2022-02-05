import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { API_HOST } from '../../../constant';
import { Post } from '../../../types/Post';
import PostBody from '../../molecules/post/PostBody';
import PostHeader from '../../molecules/post/PostHeader';

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
    <div>
      <PostHeader title={post.title} date={post.released_at} userId={userId || ''} />
      <PostBody body={post.body} />
    </div>
  );
};

export default PostViewer;
