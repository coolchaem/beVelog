import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_HOST } from '../../../constant';
import { Post } from '../../../types/Post';
import ViewBody from '../../organisms/post/ViewBody';
import PostHeader from '../../molecules/post/PostHeader';
import PostLikeShareButton from '../../molecules/post/PostLikeShareButton';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';

const PostViewer = () => {
  const [post, setPost] = useState<Post>({} as Post);
  const [liked, setLiked] = useState<boolean>(false);
  const { userId, urlSlug } = useParams<{ userId: string; urlSlug: string }>();

  const user = useAppSelector(state => state.userState);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      baseURL: API_HOST,
      url: `/@${userId}/${urlSlug}`,
    })
      .then(response => {
        const _post = response.data;
        setPost(_post);

        if (user.username !== '') {
          // 서버 api 수정까지 연달아 요청(post.id 의존성)
          // API 수정 예정: post + liked join (= SinglePost type)
          axios({
            baseURL: API_HOST,
            url: `/${user.username}/liked/${_post.id}`,
          })
            .then(reponse => {
              setLiked(reponse.data.length !== 0);
            })
            .catch(error => {
              console.error(error);
            });
        }
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
