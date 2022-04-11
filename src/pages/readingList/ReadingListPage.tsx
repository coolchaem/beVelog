import styled from '@emotion/styled';
import React from 'react';
import PostCardGrid from '../../components/molecules/common/PostCardGrid';
import PostCardGridSkeleton from '../../components/molecules/common/PostCardGridSkeleton';
import TabItem from '../../components/molecules/common/TabItem';
import HorizontalTab from '../../components/organisms/common/HorizontalTab';
import useLoadPost from '../../hooks/useLoadPost';
import { useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';

const ReadingListPage = () => {
  const { type } = useParams<{ type: string }>();
  const { username } = useAppSelector(state => state.userState);
  const [targetRef, isLoading, isDone, posts] = useLoadPost(`${username}/readingList/${type}`);

  return (
    <>
      <HorizontalTab activeTab={type || 'liked'} tabWidth={9} align="left" theme="gray">
        <TabItem name="liked" text="좋아한 포스트" to="liked" />
        <TabItem name="read" text="최근 읽은 포스트" to="read" />
      </HorizontalTab>
      <ReadingListBox>
        <PostCardGrid posts={posts} />
        {isLoading && !isDone && <PostCardGridSkeleton />}
        {!isLoading && (
          <div
            ref={targetRef}
            style={{
              width: '100%',
              height: '5rem',
            }}
          />
        )}
      </ReadingListBox>
    </>
  );
};

const ReadingListBox = styled.div`
  margin-top: 2rem;
`;

export default ReadingListPage;
