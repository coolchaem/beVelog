import React, { useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import CodeMirror from 'codemirror';

interface IModalContentProp {
  closeCb: () => void;
}

const LinkModal = (props: IModalContentProp) => {
  const { closeCb } = props;

  const onBtnClick = () => {
    const inputElem = document.getElementById('link_input') as HTMLInputElement;
    if (inputElem) {
      if (inputElem.value === '') {
        inputElem.focus();
      } else {
        const editor = document.querySelector('.CodeMirror');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const codeMirror = editor.CodeMirror as CodeMirror.Editor;
        const from = codeMirror.getCursor('from');
        const to = codeMirror.getCursor('to');

        const newStr = `[링크텍스트](${inputElem.value})`;
        codeMirror.replaceSelection(newStr);
        const setSelection = (fromCh: number, toCh: number) => {
          const newFrom: CodeMirror.Position = {
            ...from,
            ch: from.ch + fromCh,
          };
          const newTo: CodeMirror.Position = {
            ...to,
            ch: to.ch + toCh,
          };
          codeMirror.setSelection(newFrom, newTo);
        };
        setSelection(0, newStr.length);
        const newFrom = codeMirror.getCursor('from');
        const newTo = codeMirror.getCursor('to');
        codeMirror.markText(newFrom, newTo, { className: 'cm-link' });
        closeCb();
      }
    }
  };

  useLayoutEffect(() => {
    const popupContentElem = document.getElementsByClassName('popup-content')[0] as HTMLElement;
    const cursorElem = document.getElementsByClassName('CodeMirror-cursor')[0] as HTMLElement;
    if (popupContentElem && cursorElem) {
      popupContentElem.style.margin = '0px';
      const cursorRect = cursorElem.getBoundingClientRect();
      popupContentElem.style.top = `${cursorRect.top + cursorRect.height + 10}px`;
      popupContentElem.style.left = `${cursorRect.left}px`;
    }
  }, []);

  return (
    <LinkModalContentBox>
      <LinkModalTitle>링크 등록</LinkModalTitle>
      <LinkModalBottomBox>
        <LinkModalInput id="link_input" placeholder="URL을 입력하세요"></LinkModalInput>
        <LinkModalConfirmBtn onClick={onBtnClick}>확인</LinkModalConfirmBtn>
      </LinkModalBottomBox>
    </LinkModalContentBox>
  );
};

const LinkModalTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const LinkModalBottomBox = styled.div`
  display: flex;
`;

const LinkModalInput = styled.input`
  width: 237px;
  height: 32px;
  font-size: 20px;
  border-bottom: solid 1px;
`;

const LinkModalConfirmBtn = styled.button`
  color: white;
  width: 60px;
  height: 32px;
  border-radius: 20px;
  background-color: rgb(134, 142, 150);
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(18, 184, 134);
  }
`;

const LinkModalContentBox = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px 0px;
  box-sizing: border-box;
  padding: 25px;
  background-color: white;
`;

export default LinkModal;
