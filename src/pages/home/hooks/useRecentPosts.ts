import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_HOST } from '../../../constant';
import { PartialPost } from '../../../types/Post';

export default function useRecentPosts(): PartialPost[] | undefined {
  const [posts, setPosts] = useState<PartialPost[]>();

  useEffect(() => {
    axios({ baseURL: API_HOST, url: '/posts' })
      .then(response => {
        if (response.data) {
          console.table(response.data);
          setPosts(response.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return posts;
}
