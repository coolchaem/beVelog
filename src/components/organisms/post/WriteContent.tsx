import React, { useEffect } from 'react';
import CodeMirror from 'codemirror';
import { setBody } from '../../../redux/reducers/WriteSlice';
import { useAppSelector } from '../../../redux/hooks';
import { Write } from '../../../types/Write';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

const WriteContent = () => {
  const writeState = useAppSelector(state => state.writeState);
  const dispatch = useDispatch();
  let editor: HTMLDivElement | null = null;

  useEffect(() => {
    if (editor) {
      const codeMirror = CodeMirror(editor, {
        mode: 'markdown',
        lineNumbers: false, // 좌측에 라인넘버 띄우기
        lineWrapping: true, // 내용이 너무 길면 다음 줄에 작성
        scrollbarStyle: 'native',
        value: writeState.body,
        showCursorWhenSelecting: true,
      });
      codeMirror.on('change', doc => {
        const newState: Write = {
          ...writeState,
          body: doc.getValue(),
        };
        dispatch(setBody(newState));
      });
    }
  }, []); // eslint-disable-line

  return (
    <WriteBox
      className="editor"
      ref={ref => {
        editor = ref;
      }}
    ></WriteBox>
  );
};

const WriteBox = styled.div`
  flex: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (max-width:1023px) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .CodeMirror-lines {
    padding-left: 1rem;
    padding-right: 1rem;
    @media (max-width:1023px) {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
  flex: 1;
  font-family: "initial";
  height: auto; // font-family: 'D2 coding';
  font-family: "Inconsolata", "D2 Coding", sans-serif;
  font-size: 1.125rem;
  line-height: 1.5;
  @media (max-width:1023px) {
    font-size: 1rem;
    line-height: 1.25;
  }
  .cm-header {
    line-height: 1.75;
  }
  .cm-header-1 {
    font-size: 2.25rem;
  }
  .cm-header-2 {
    font-size: 1.6825rem;
  }
  .cm-header-3 {
    font-size: 1.3125rem;
  }
  .cm-header-4 {
    font-size: 1.125rem;
  }
  &.cm-s-default {
    .cm-header {
      color: $oc-gray-9;
      font-weight: 600;
      &.cm-comment {
        color: $oc-gray-7;
      }
    }
  }
  &.cm-s-material {
    &.CodeMirror-empty {
      color: $oc-gray-5;
    }
    .cm-header {
      color: white;
      &.cm-comment {
        color: $oc-gray-6;
      }
    }
    .cm-quote {
      color: $oc-gray-5;
      font-style: italic;
    }
  }
}
`;

export default WriteContent;
