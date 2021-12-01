import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { PartialPost } from '../../../types/Post';
import TempThumbnail from '../../../assets/thumbnail.jpeg';

interface PostCardProps {
  post: PartialPost;
}

const PostCard = ({ post }: PostCardProps) => {
  //usl_slug : post 의 제목에 있는 특수문자, 이모티콘, 공백 처리
  const postUrl = `/@${post.user.username}/${post.url_slug}`;
  return (
    <ContainerStyle>
      <StyledLink to={postUrl}>
        <img src={TempThumbnail} width="320px" height="167px" alt={post.title} />
      </StyledLink>
      <Content>
        <StyledLink to={postUrl}>
          <h4>{post.title}</h4>
          <DiscriptionStyle>
            <p>
              {post.short_description}
            </p>
          </DiscriptionStyle>
        </StyledLink>
        <SubInfoStyle>
          {`${post.released_at} · ${post.comments_count}개의 댓글`}
        </SubInfoStyle>
      </Content>
      <FooterStyle>
        <div className="userinfo">
          <img src={TempThumbnail} width="20px" height="20px" alt={post.title} />
          <span>
            by <b> {post.user.username} </b>
          </span>
        </div>
          🖤 {post.likes}
      </FooterStyle>
    </ContainerStyle>
  );
};

export default PostCard;

const ContainerStyle = styled.div`
  width: 20rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
  }
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const DiscriptionStyle = styled.div`
  flex:1;
  p {
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;        
    height: 3.9375rem;
    margin-bottom: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

const SubInfoStyle = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
`

const FooterStyle = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid lightgray;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  align-items: center;
  justify-content: space-between;
  .userinfo {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      margin-right: 0.5rem;
    }
  }
  .likes {
    display: flex;
    align-items: center;
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
    }
  }
`