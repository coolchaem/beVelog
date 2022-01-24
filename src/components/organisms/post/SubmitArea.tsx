import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

const SubmitArea = () => {
  const writeState = useAppSelector(state => state.writeState);

  return (
    <SubmitBox>
      <ExitButton>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </svg>
        <span>나가기</span>
      </ExitButton>
      <SubmitButtonBox></SubmitButtonBox>
    </SubmitBox>
  );
};

const ExitButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
`;

const SubmitButtonBox = styled.div`
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
`;

const SubmitBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

export default SubmitArea;
