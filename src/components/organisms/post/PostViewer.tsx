import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_HOST } from '../../../constant';
import { SinglePost } from '../../../types/Post';
import ViewBody from '../../organisms/post/content/ViewBody';
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
    try {
      const userName = user.username;
      if (!userName) {
        console.log('login 기능 보수 중^^, 필요하다면 const 값을 주세여');
        return;
      }

      axios
        .post(`${API_HOST}/${userName}/${liked ? 'unlike' : 'like'}/${post.id}/`)
        .then(response => {
          post.likes = response.data.likes;
          setLiked(response.data.liked);
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
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
