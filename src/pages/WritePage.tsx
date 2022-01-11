import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import ViewPost from '../components/organisms/post/ViewPost';
import WritePost from '../components/organisms/post/WritePost';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/scroll/simplescrollbars.css';
import { useAppSelector } from '../redux/hooks';

const WritePage = () => {
  const writeState = useAppSelector(state => state.writeState);
  useEffect(() => {
    return () => {
      // 생각해보니 이럴거면 굳이 helmet을 사용하지 않아도 되겠다는 생각이..?
      // code 리뷰 후 이야기를 나눠봤으면 좋겠다.
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
      <ViewPost writeState={writeState} />
    </WriteViewContainer>
  );
};

const WriteViewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default WritePage;
