import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import styled from '@emotion/styled';
import WriteContent from './WriteContent';
import WriteHeader from './WriteHeader';
import SubmitArea from './SubmitArea';

const WritePost = () => {
  const writeState = useAppSelector(state => state.writeState);

  return (
    <WritePostBox>
      <WriteHeader />
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
  padding-bottom: 64px;
  position: relative;
`;

export default WritePost;
