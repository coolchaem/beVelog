import React, { useEffect, useState } from 'react';
import PostCardGrid from '../../components/molecules/common/PostCardGrid';
import { API_HOST } from '../../constant';
import { PartialPost } from '../../types/Post';
import axios from 'axios';

const RecentPostsPage = () => {
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

  return (
    <>
      <div> 최신 글 페이지 입니다.</div>
      <PostCardGrid posts={posts} />
    </>
  );
};

export default RecentPostsPage;
