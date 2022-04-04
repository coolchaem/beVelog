import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_HOST } from '../../../constant';
import { Post } from '../../../types/Post';
import ViewBody from '../../organisms/post/ViewBody';
import PostHeader from '../../molecules/post/PostHeader';
import PostLikeShareButton from '../../molecules/post/PostLikeShareButton';

const PostViewer = () => {
  const [post, setPost] = useState<Post>({} as Post);
  const [liked, setLiked] = useState<boolean>(false);
  const { userId, urlSlug } = useParams<{ userId: string; urlSlug: string }>();

  useEffect(() => {
    axios({
      baseURL: API_HOST,
      url: `/@${userId}/${urlSlug}`,
    })
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId, urlSlug]);

  useEffect(() => {
    axios({
      baseURL: API_HOST,
      url: `/${userId}/liked/${post.id}`,
    }).then(reponse => {
      setLiked(reponse.data.length !== 0);
    });
  }, [post.id, userId]);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <PostHeader title={post.title} date={post.released_at} userName={userId || ''} />
      <PostBody>
        <PostLikeShareButton likeCount={post.likes} liked={liked} onLikeToggle={handleLikeToggle} />
        <PostBodyBox>{post.body && <ViewBody body={post.body} />}</PostBodyBox>
      </PostBody>
    </div>
  );
};

const PostBody = styled.div`
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

export default PostViewer;
