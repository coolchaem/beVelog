import React from 'react';
import styled from '@emotion/styled';

import TagView from './TagView';
import WriteTitleTextArea from './WriteTitleTextArea';

const WriteHeader = () => {
  return (
    <WriteHeaderBox>
      <WriteTitleBox>
        <WriteTitleTextArea />
      </WriteTitleBox>
      <SeparaterBox />
      <TagView />
    </WriteHeaderBox>
  );
};

const WriteHeaderBox = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
}`;

const WriteTitleBox = styled.div`
  flex: 1;
  display: flex;
  input {
    flex: 1;
    background: none;
    border: none;
    color: rgb(33, 37, 41);
    font-size: 2.75rem;
    font-family: arial;
    font-weight: bold;
    outline: none;
    padding: 0px;

    ::placeholder {
      color: grey;
      word-spacing: 10%;
    }
  }
`;

const SeparaterBox = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

export default WriteHeader;
