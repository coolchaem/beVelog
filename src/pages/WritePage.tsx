import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import ViewPost from '../components/organisms/post/content/ViewPost';
import WritePost from '../components/organisms/post/WritePost';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/scroll/simplescrollbars.css';

const WritePage = () => {
  useEffect(() => {
    return () => {
      document.title = 'velog';
    };
  }, []);
  // 1024 보다 작으면 split 취소
  return (
    <WriteViewContainer>
      <Helmet>
        <title>새 글 작성하기 | velog</title>
      </Helmet>
      <WritePost />
      <ViewPost />
    </WriteViewContainer>
  );
};

const WriteViewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default WritePage;
