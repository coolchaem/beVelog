import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useAppSelector } from '../../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setWriteState } from '../../../../redux/reducers/WriteSlice';
import { Write } from '../../../../types/Write';

const TagView = () => {
  const writeState = useAppSelector(state => state.writeState);
  const dispatch = useDispatch();
  const tagViewRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      e.stopPropagation();
      const inputElem = inputRef.current;
      const tagViewElem = tagViewRef.current;
      if (inputElem && tagViewElem) {
        if (inputElem.value === '') return;

        const tagsAry = writeState.submitBox?.tags;
        let newState: Write;
        if (tagsAry === undefined || tagsAry.length === 0) {
          newState = { submitBox: { tags: [inputElem.value] } };
        } else {
          // 이미 존재하는 tag가 있는 경우
          if (tagsAry.find(tag => tag === inputElem.value)) {
            // 1. input tag shaking
            inputElem.classList.add('duplicate-tag');
            // 2. 중복된 태그 빨간색 마킹
            tagViewElem.querySelectorAll('div').forEach(tag => {
              if (tag.textContent === inputElem.value) {
                tag.classList.add('duplicate-tag');
              }
            });
            return;
          }

          newState = {
            submitBox: { tags: [...tagsAry, inputElem.value] },
          };
        }

        dispatch(setWriteState(newState));
        inputElem.value = '';
      }
    }
  };
  const clickHandler = (e: React.MouseEvent) => {
    const tagAry = writeState.submitBox?.tags;
    const tagName = (e.target as HTMLDivElement).textContent;
    // 현재 클릭된 tag 삭제
    if (tagAry && tagName && tagAry.length !== 0) {
      const removeIdx = tagAry.findIndex(val => val === tagName);
      const newTags = tagAry.filter((tag, idx) => idx !== removeIdx);
      const newState: Write = {
        submitBox: {
          tags: newTags,
        },
      };
      dispatch(setWriteState(newState));
    }
  };
  const animationEndHandler = (e: React.AnimationEvent) => {
    const inputElem = inputRef.current;
    const tagViewElem = tagViewRef.current;
    if (inputElem && tagViewElem) {
      tagViewElem.querySelectorAll('div').forEach(tag => {
        tag.classList.remove('duplicate-tag');
      });
      inputElem.classList.remove('duplicate-tag');
    }
  };

  return (
    <TagViewBox ref={tagViewRef}>
      {writeState.submitBox?.tags?.map((tag, idx) => {
        return (
          <Tag key={idx.toString()} onClick={clickHandler}>
            {tag}
          </Tag>
        );
      })}
      <TagInput
        placeholder="태그를 입력하세요"
        onKeyPress={keyPressHandler}
        ref={inputRef}
        onAnimationEnd={animationEndHandler}
      />
    </TagViewBox>
  );
};

const TagViewBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  outline: none;
  cursor: text;
  font-size: 1.125rem;
  line-height: 2rem;
  min-width: 8rem;
  border: none;
  transition: all 0.3s;
`;

const TagInput = styled.input`
  border: none;
  outline: none;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;

  &.duplicate-tag {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 0.5s;
    color: indianred;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const Tag = styled.div`
  font-size: 1.125rem;
  display: inline-flex;
  align-items: center;
  height: 2rem;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: rgb(241, 243, 245);
  color: rgb(12, 166, 120);
  padding-top: 3px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;
  &.duplicate-tag {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    background-color: indianred;
    color: white;
  }
`;

export default TagView;
