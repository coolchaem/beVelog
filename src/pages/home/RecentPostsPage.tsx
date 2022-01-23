import React, { useCallback, useEffect, useRef, useState } from 'react';
import PostCardGrid from '../../components/molecules/common/PostCardGrid';
import { API_HOST } from '../../constant';
import { PartialPost } from '../../types/Post';
import axios from 'axios';
import PostCardGridSkeleton from '../../components/molecules/common/PostCardGridSkeleton';

const RecentPostsPage = () => {
  const [posts, setPosts] = useState<PartialPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDone, setIsDone] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const loadPostCount = useRef<number>(0);

  const loadPosts = () => {
    setIsLoading(true);
    axios({ baseURL: API_HOST, url: `/recentPosts/${loadPostCount.current}` })
      .then(response => {
        if (Array.isArray(response.data) && !response.data.length) {
          setIsLoading(false);
          setIsDone(true);
          return;
        }

        if (response.data.length) {
          setPosts(prev => (prev ? [...prev, ...response.data] : response.data));
          loadPostCount.current += 1;
        }

        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const onIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (!entry.isIntersecting || isDone) {
        return;
      }
      loadPosts();
    },
    [isDone]
  );

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.4,
    });
    observer.observe(targetRef.current);

    return () => observer && observer.disconnect();
  }, [isLoading, onIntersect]);

  return (
    <>
      <div> 최신 글 페이지 입니다.</div>
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

export default RecentPostsPage;
