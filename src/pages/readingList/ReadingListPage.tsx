import React from 'react';
import PostCardGrid from '../../components/molecules/common/PostCardGrid';
import PostCardGridSkeleton from '../../components/molecules/common/PostCardGridSkeleton';
import useLoadPost from '../../hooks/useLoadPost';
import { useAppSelector } from '../../redux/hooks';

const ReadingListPage = () => {
  // TODO 최근 읽은 포스트
  const { username } = useAppSelector(state => state.userState);
  const [targetRef, isLoading, isDone, posts] = useLoadPost(`${username}/readingList`);

  return (
    <>
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
    </>
  );
};

export default ReadingListPage;
