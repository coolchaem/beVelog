import React from 'react';
import styled from '@emotion/styled';
import ViewBody from './ViewBody';
import { useAppSelector } from '../../../../redux/hooks';

const ViewPost: React.FC = () => {
  const { title, body } = useAppSelector(state => state.writeState);

  return (
    <ViewBox>
      <ViewTitle>{title}</ViewTitle>
      <ViewBody body={body}></ViewBody>
    </ViewBox>
  );
};

const ViewTitle = styled.h1`
  min-width: 0px;
`;

const ViewBox = styled.div`
  background-color: #fbfdfc;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-width: 0px;
  padding: 48px;
  position: relative;
  max-height: 975px;
  overflow-y: scroll;
`;

export default ViewPost;
