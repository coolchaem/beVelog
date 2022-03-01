import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { Flip, toast } from 'react-toastify';
import { useAppSelector } from '../../../../redux/hooks';
import { initialState } from '../../../../redux/reducers/WriteSlice';
import axios from 'axios';
import { API_HOST } from '../../../../constant';

const showToast = (msg: string) => {
  toast(msg, {
    autoClose: 2100,
    transition: Flip,
    theme: 'colored',
    style: {
      backgroundColor: 'indianred',
      color: 'ghostwhite',
      fontWeight: 'lighter',
    },
    progressStyle: { backgroundColor: 'ghostwhite' },
  });
};

const goToElem = (target: HTMLElement | null) => {
  if (target) {
    target?.scrollIntoView();
    const newRange = document.createRange();
    newRange.selectNode(target);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(newRange);
  }
};

const SubmitArea = () => {
  const navigate = useNavigate();
  const userState = useAppSelector(state => state.userState);
  const writeState = useAppSelector(state => state.writeState);

  const createNewPost = useCallback(() => {
    if (API_HOST) {
      const newData = {
        title: writeState.title || '',
        body: writeState.body || '',
        is_private: false,
        is_markdown: true,
        user: {
          username: userState.username,
          id: userState.id,
        },
        is_temp: false,
      };
      axios
        .post(API_HOST + '/write', { command: 'new_post', post: newData })
        .then(data => {
          console.log('Good', data);
        })
        .catch(err => {
          console.log('BAD', err);
        });
    }
  }, [writeState, userState]);

  const goHome = useCallback(() => navigate('/', { replace: true }), [navigate]);
  const handlePublish = useCallback(() => {
    if (writeState.title === initialState.title) {
      const titleElem = document.getElementById('beVelog-titleElem');
      showToast('제목을 입력하세요.');
      goToElem(titleElem);
    } else if (writeState.body === initialState.body) {
      const lines = document.getElementsByClassName('CodeMirror-line');
      if (lines.length > 0) {
        const bodyElem = lines.item(0) as HTMLElement;
        showToast('본문 내용을 입력하세요.');
        goToElem(bodyElem);
      }
    } else {
      createNewPost();
    }
  }, [writeState, createNewPost]);

  const handleTempSave = useCallback(() => {
    if (writeState.title === initialState.title) {
      const titleElem = document.getElementById('beVelog-titleElem');
      showToast('제목을 입력하세요.');
      goToElem(titleElem);
    } else if (writeState.body === initialState.body) {
      const lines = document.getElementsByClassName('CodeMirror-line');
      if (lines.length > 0) {
        const bodyElem = lines.item(0) as HTMLElement;
        showToast('본문 내용을 입력하세요.');
        goToElem(bodyElem);
      }
    } else {
      // 임시 저장
    }
  }, [writeState]);
  return (
    <SubmitBox>
      <ExitButton onClick={goHome}>
        <ExitLabel>◀︎</ExitLabel>
        <ExitLabel>나가기</ExitLabel>
      </ExitButton>
      <SubmitButtonBox>
        <TemporalSaveButton color={'lightGrey'} onClick={handleTempSave}>
          임시저장
        </TemporalSaveButton>
        <SubmitButton color={'teal'} onClick={handlePublish}>
          출간하기
        </SubmitButton>
      </SubmitButtonBox>
    </SubmitBox>
  );
};

const ExitButton = styled.button`
  height: 2.5rem;
  padding-right: 20px;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  font-size: 16px;
  transition: 0.2s all ease;
  :hover {
    background-color: lightgrey;
  }
`;

const ExitLabel = styled.span`
  margin-left: 10px;
`;

const SubmitButtonBox = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo',
    'Malgun Gothic', '맑은 고딕', 나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR',
    arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  justify-content: flex-end;
  align-items: center;
`;

const SubmitButton = styled.button`
  background-color: rgb(18, 184, 134);
  border: 0px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-left: 12px;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: medium;
  padding: 0px 20px;
  :hover {
    background-color: rgb(18, 184, 134, 0.78);
  }
`;

const TemporalSaveButton = styled.button`
  background-color: lightGrey;
  border: 0px;
  border-radius: 4px;
  color: rgb(73, 80, 87);
  cursor: pointer;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: medium;
  padding: 0px 20px;
  :hover {
    background-color: rgb(211, 211, 211, 0.78);
  }
`;

const SubmitBox = styled.div`
  height: 4rem;
  width: calc(100% - 30px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4px;
  padding-right: 20px;
`;

export default SubmitArea;
