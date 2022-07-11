import styled from '@emotion/styled';
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Write } from '../../../../types/Write';
import { setWriteState } from '../../../../redux/reducers/WriteSlice';

const WriteTitleTextArea = () => {
  const dispatch = useDispatch();
  const titleTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const inputHandler = useCallback(
    (e: React.FormEvent) => {
      // 1) 사이즈 조정
      const textareaElem = titleTextAreaRef.current;
      if (textareaElem) {
        textareaElem.style.height = '1px';
        textareaElem.style.height = `${textareaElem.scrollHeight}px`;
      }
      // 2) redux store 변경
      const newState: Write = {
        title: (e.target as HTMLTextAreaElement).value,
      };
      dispatch(setWriteState(newState));
    },
    [] // eslint-disable-line
  );
  return (
    <WriteTitleTextarea
      id={'beVelog-titleElem'}
      ref={titleTextAreaRef}
      placeholder={'제목을 입력하세요'}
      onInput={inputHandler}
    ></WriteTitleTextarea>
  );
};

const WriteTitleTextarea = styled.textarea`
  border: none;
  display: block;
  color: rgb(33, 37, 41);
  font-weight: bold;
  font-size: 2.75rem;
  font-family: arial;
  height: 66px;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  resize: none;
  padding: 0px;
  width: 100%;

  ::placeholder {
    color: grey;
    word-spacing: 10%;
  }
`;

export default WriteTitleTextArea;
