import React from 'react';
import styled from '@emotion/styled';
import { Write } from '../../../types/Write';
import ViewBody from './ViewBody';

interface ViewProps {
  writeState: Write;
}

const ViewPost: React.FC<ViewProps> = props => {
  const { title, body } = props.writeState;

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
`;

export default ViewPost;
