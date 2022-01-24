import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { PartialPost } from '../types/Post';
import { API_HOST } from '../constant';

type returnType = [RefObject<HTMLDivElement>, boolean, boolean, PartialPost[] | undefined];

export default function useLoadPost(url: string): returnType {
  const [posts, setPosts] = useState<PartialPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDone, setIsDone] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const loadPostCount = useRef<number>(0);

  const loadPosts = useCallback(() => {
    setIsLoading(true);
    axios({ baseURL: API_HOST, url: `/${url}/${loadPostCount.current}` })
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
  }, [url]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const onIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (!entry.isIntersecting || isDone) {
        return;
      }
      loadPosts();
    },
    [isDone, loadPosts]
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

  return [targetRef, isLoading, isDone, posts];
}
