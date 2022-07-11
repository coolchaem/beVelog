import React from 'react';
import styled from '@emotion/styled';
import WriteContent from './content/WriteContent';
import WriteHeader from './header/WriteHeader';
import SubmitArea from './submit/SubmitArea';
import Toolbar from './toolbar/Toolbar';

const WritePost = () => {
  return (
    <WritePostBox>
      <WriteHeader />
      <Toolbar />
      <WriteContent />
      <SubmitArea />
    </WritePostBox>
  );
};

const WritePostBox = styled.div`
  box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  font-size: 18px;
  min-width: 0px;
  height: 100vh;
  position: relative;
`;

export default WritePost;
