import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { PartialPost } from '../../../types/Post';
import TempThumbnail from '../../../assets/thumbnail.jpeg';
interface PostCardProps {
  post: PartialPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const postUrl = `/@${post.user.username}/${post.url_slug}`;
  return (
    <PostCardLayout>
      <PostCardLink to={postUrl}>
        <img src={TempThumbnail} width="320px" height="167px" alt={post.title} />
      </PostCardLink>
      <PostCardContentBox>
        <PostCardLink to={postUrl}>
          <h4>{post.title}</h4>
          <PostCardDescriptionBox>{post.short_description}</PostCardDescriptionBox>
        </PostCardLink>
        <PostCardSubInfoBox>{`${post.released_at} · ${post.comments_count}개의 댓글`}</PostCardSubInfoBox>
      </PostCardContentBox>
      <PostCardUserInfoBox>
        <img src={TempThumbnail} width="20px" height="20px" alt={post.title} />
        by &nbsp; <b>{post.user.username}</b>
        <span className="likes">{`🖤 ${post.likes}`}</span>
      </PostCardUserInfoBox>
    </PostCardLayout>
  );
};

export default PostCard;

export const PostCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 20rem;
  background: white;

  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
  }
`;

export const PostCardContentBox = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 1rem;

  h4 {
    margin: 0;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const PostCardLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const PostCardDescriptionBox = styled.div`
  display: -webkit-box;
  height: 3.9375rem;
  margin: 0;
  margin-bottom: 1.5rem;

  font-size: 0.875rem;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const PostCardSubInfoBox = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
`;

export const PostCardUserInfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  border-top: 1px solid lightgray;

  font-size: 0.75rem;
  line-height: 1.5;
  text-decoration: none;
  color: inherit;

  img {
    object-fit: cover;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin-right: 0.5rem;
  }

  .likes {
    margin-left: auto;
  }
`;
