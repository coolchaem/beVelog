import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_HOST } from '../../../../constant';

const PostViewer = () => {
  const [postBody, setPostBody] = useState<HTMLHtmlElement>();
  const { userId, urlSlug } = useParams<{ userId: string; urlSlug: string }>();

  useEffect(() => {
    axios({ baseURL: API_HOST, url: `/@${userId}/${urlSlug}` })
      .then(response => {
        console.log(response.data);
        setPostBody(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId, urlSlug]);

  console.log(postBody);

  return <div>글 보기 페이지 입니다.</div>;
};

export default PostViewer;
