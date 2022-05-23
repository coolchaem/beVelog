import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { Flip, toast } from 'react-toastify';
import { useAppSelector } from '../../../../redux/hooks';
import { initialState, setWriteState } from '../../../../redux/reducers/WriteSlice';
import axios from 'axios';
import { API_HOST } from '../../../../constant';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Write } from '../../../../types/Write';

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
  const dispatch = useDispatch();
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
        .post(API_HOST + '/write', newData)
        .then(data => {
          console.log('Good', data);
        })
        .catch(err => {
          console.log('BAD', err);
        });
    }
  }, [writeState, userState]);

  const tempSave = useCallback(() => {
    if (API_HOST) {
      const newData = {
        id: writeState.postData?.id || 'NONE ID ERROR',
        title: writeState.title || '',
        body: writeState.body || '',
        is_private: false,
        is_markdown: true,
        user: {
          username: userState.username || 'youngjewoo',
        },
        is_temp: false,
      };
      axios
        .post(API_HOST + '/write/tempsave', newData)
        .then(data => {
          console.log('TEMP SAVED!', data);
        })
        .catch(err => {
          console.error('TEMP SAVE FAILED!', err);
        });
    }
  }, [writeState, userState]);

  // 나가기
  const goHome = useCallback(() => navigate('/', { replace: true }), [navigate]);

  // 출간하기
  const handlePublish = useCallback(() => {
    if (writeState.title === initialState.title) {
      console.log(initialState);
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

  // 임시 저장
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
      // 제목과 본문 내용이 유효한 경우에만 임시 저장
      tempSave();
    }
  }, [writeState, tempSave]);

  // 나가기 시 state 초기화
  // const clearState = useCallback(() => {
  //   const newState: Write = { ...initialState };
  //   dispatch(setWriteState(newState));
  // }, [dispatch]);

  useEffect(() => {
    // post id 초기화
    if (writeState.postData?.id === undefined) {
      const newState: Write = {
        postData: {
          id: v4(),
        },
      };
      dispatch(setWriteState(newState));
    }
  });

  useEffect(() => {
    // 30초마다 임시 저장 호출
    const itvId = setInterval(handleTempSave, 30000);
    return () => {
      clearTimeout(itvId);
    };
  }, [handleTempSave]);

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
