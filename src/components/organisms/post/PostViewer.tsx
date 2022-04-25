import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_HOST } from '../../../constant';
import { SinglePost } from '../../../types/Post';
import ViewBody from '../../organisms/post/ViewBody';
import PostHeader from '../../molecules/post/PostHeader';
import PostLikeShareButton from '../../molecules/post/PostLikeShareButton';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';

const PostViewer = () => {
  const [post, setPost] = useState<SinglePost>({} as SinglePost);
  const [liked, setLiked] = useState<boolean>(false);
  const { userId, urlSlug } = useParams<{ userId: string; urlSlug: string }>();

  const user = useAppSelector(state => state.userState);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_HOST}/@${userId}/${urlSlug}/`, {
        params: {
          loginUserName: user.username,
        },
      })
      .then(response => {
        const _post = response.data;
        setPost(_post);
        setLiked(_post.liked);
      })
      .catch(error => {
        console.error(error);
        if (error.response.status === 404) {
          navigate('/NotFound', { replace: true });
        }
      });
  }, [navigate, urlSlug, user.username, userId]);

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
