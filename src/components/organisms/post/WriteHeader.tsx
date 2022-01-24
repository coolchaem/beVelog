import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { Write } from '../../../types/Write';
import { setTitle } from '../../../redux/reducers/WriteSlice';

const WriteHeader = () => {
  const writeState = useAppSelector(state => state.writeState);
  const dispatch = useDispatch();
  const inputHandler = useCallback(
    (e: React.FormEvent) => {
      const newState: Write = {
        ...writeState,
        title: (e.target as HTMLTextAreaElement).value,
      };
      dispatch(setTitle(newState));
    },
    [dispatch, writeState]
  );
  return (
    <WriteHeaderBox>
      <WriteTitleBox placeholder={'제목을 입력하세요'} onInput={inputHandler}></WriteTitleBox>
      <SeparaterBox />
    </WriteHeaderBox>
  );
};

const WriteHeaderBox = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
}`;

const WriteTitleBox = styled.textarea`
  display: block;
  padding: 0px;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  height: 66px;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: rgb(33, 37, 41);
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
