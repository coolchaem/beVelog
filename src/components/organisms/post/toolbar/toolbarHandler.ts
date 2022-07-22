/* eslint-disable */
// indent rule이 switch-case 문에서 에러 발생 시킴
import CodeMirror from 'codemirror';

export const execToolbarCmd = (cmd: string) => {
  const editor = document.querySelector('.CodeMirror');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const codeMirror = editor.CodeMirror as CodeMirror.Editor;
  const from = codeMirror.getCursor('from');
  const to = codeMirror.getCursor('to');
  const setHeaderCmd = (hdrString: string) => {
    const lineToken = codeMirror.getTokenAt(codeMirror.getCursor());
    const lineTokenAry = lineToken.string.split(' ');
    let newString = lineToken.string;
    let isApplyHeader = true;
    let prevHdrLvl = 0;
    if (lineTokenAry[0].includes('#')) {
      for (let i = 0; i < lineTokenAry[0].length; ++i) {
        if (lineTokenAry[0][i] === '#') {
          ++prevHdrLvl;
        }
      }
      const sharpStr = lineTokenAry.shift();
      newString = lineTokenAry.join(' ');
      if (sharpStr !== hdrString) {
        newString = `${hdrString} ${newString}`;
      } else {
        isApplyHeader = false;
      }
    } else {
      newString = `${hdrString} ${newString}`;
    }
    if (isApplyHeader) {
      if (prevHdrLvl > 0) {
        codeMirror.removeLineClass(
          codeMirror.getCursor().line,
          newString,
          `cm-header-${prevHdrLvl}`
        );
      }
      let currHdrLvl = hdrString.length;
      codeMirror.addLineClass(codeMirror.getCursor().line, newString, `cm-header-${currHdrLvl}`);
    } else {
      codeMirror.removeLineClass(codeMirror.getCursor().line, newString, `cm-header-${prevHdrLvl}`);
    }
    codeMirror.replaceRange(
      `${newString}`,
      { ch: lineToken.start, line: codeMirror.getCursor().line },
      { ch: lineToken.end, line: codeMirror.getCursor().line }
    );
  };

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

  switch (cmd) {
    case 'bold':
      {
        let isBoldApply = false;
        if (codeMirror.getSelection() === '') {
          isBoldApply = true;
          codeMirror.replaceSelection('**텍스트**');
          setSelection(0, 7);
        } else {
          const selectedText = codeMirror.getSelection();
          if (
            selectedText.length > 4 &&
            selectedText.slice(0, 2) === '**' &&
            selectedText.slice(-2) === '**'
          ) {
            codeMirror.replaceSelection(`${selectedText.slice(2, -2)}`);
            setSelection(0, -4);
          } else {
            isBoldApply = true;
            codeMirror.replaceSelection(`**${codeMirror.getSelection().trim()}**`);
            setSelection(0, 4);
          }
        }
        // write 영역에 스타일 추가
        if (isBoldApply) {
          const newFrom = codeMirror.getCursor('from');
          const newTo = codeMirror.getCursor('to');
          codeMirror.markText(newFrom, newTo, { className: 'cm-strong' });
        }
      }
      break;
    case 'italic':
      {
        let isItalicApply = false;
        if (codeMirror.getSelection() === '') {
          isItalicApply = true;
          codeMirror.replaceSelection('*텍스트*');
          setSelection(0, 5);
        } else {
          const selectedText = codeMirror.getSelection();
          if (
            selectedText.length > 2 &&
            selectedText.slice(0, 1) === '*' &&
            selectedText.slice(-1) === '*'
          ) {
            codeMirror.replaceSelection(`${selectedText.slice(1, -1)}`);
            setSelection(0, -2);
          } else {
            isItalicApply = true;
            codeMirror.replaceSelection(`*${codeMirror.getSelection().trim()}*`);
            setSelection(0, 2);
          }
        }
        // write 영역에 스타일 추가
        if (isItalicApply) {
          const newFrom = codeMirror.getCursor('from');
          const newTo = codeMirror.getCursor('to');
          codeMirror.markText(newFrom, newTo, { className: 'cm-italic' });
        }
      }
      break;
    case 'strike':
      {
        let isStrikeApply = false;
        if (codeMirror.getSelection() === '') {
          isStrikeApply = true;
          codeMirror.replaceSelection('~~텍스트~~');
          setSelection(0, 7);
        } else {
          const selectedText = codeMirror.getSelection();
          if (
            selectedText.length > 4 &&
            selectedText.slice(0, 2) === '~~' &&
            selectedText.slice(-2) === '~~'
          ) {
            codeMirror.replaceSelection(`${selectedText.slice(2, -2)}`);
            setSelection(0, -4);
          } else {
            isStrikeApply = true;
            codeMirror.replaceSelection(`~~${codeMirror.getSelection().trim()}~~`);
            setSelection(0, 4);
          }
        }
        // write 영역에 스타일 추가
        if (isStrikeApply) {
          const newFrom = codeMirror.getCursor('from');
          const newTo = codeMirror.getCursor('to');
          codeMirror.markText(newFrom, newTo, { className: 'cm-strike' });
        }
      }
      break;
    case 'h1':
      setHeaderCmd('#');
      break;
    case 'h2':
      setHeaderCmd('##');
      break;
    case 'h3':
      setHeaderCmd('###');
      break;
    case 'h4':
      setHeaderCmd('####');
      break;
    case 'quote':
      {
        let isQuoteApply = true;
        if (codeMirror.getSelection() === '') {
          const lineToken = codeMirror.getTokenAt(codeMirror.getCursor());
          const lineTokenAry = lineToken.string.split(' ');
          let pureString = lineToken.string;
          if (lineTokenAry[0].includes('>')) {
            isQuoteApply = false;
            lineTokenAry.shift();
            pureString = lineTokenAry.join(' ');
            codeMirror.replaceRange(
              `${pureString}`,
              { ch: lineToken.start, line: codeMirror.getCursor().line },
              { ch: lineToken.end, line: codeMirror.getCursor().line }
            );
            codeMirror.removeLineClass(codeMirror.getCursor().line, pureString, `cm-quote`);
          } else {
            codeMirror.replaceRange(
              `> ${pureString}`,
              { ch: lineToken.start, line: codeMirror.getCursor().line },
              { ch: lineToken.end, line: codeMirror.getCursor().line }
            );
            codeMirror.addLineClass(codeMirror.getCursor().line, pureString, `cm-quote`);
          }
        } else {
          const newString = `> ${codeMirror.getSelection().trim()}`;
          codeMirror.replaceSelection(newString);
          codeMirror.addLineClass(codeMirror.getCursor().line, newString, `cm-quote`);
        }
      }
      break;
    case 'image':
      {
        const inputElem = document.getElementById('image_upload_input');
        if (inputElem) {
          inputElem.click();
        }
      }
      break;
    case 'codeblock':
      {
        let isCodeApply = false;
        if (codeMirror.getSelection() === '') {
          isCodeApply = true;
          codeMirror.replaceSelection('```코드를 입력하세요```');
          setSelection(0, 15);
        } else {
          const selectedText = codeMirror.getSelection();
          if (
            selectedText.length > 6 &&
            selectedText.slice(0, 3) === '```' &&
            selectedText.slice(-3) === '```'
          ) {
            codeMirror.replaceSelection(`${selectedText.slice(3, -3)}`);
            setSelection(0, -6);
          } else {
            isCodeApply = true;
            codeMirror.replaceSelection(`\`\`\`${codeMirror.getSelection().trim()}\`\`\``);
            setSelection(0, 6);
          }
        }
        // write 영역에 스타일 추가
        if (isCodeApply) {
          const newFrom = codeMirror.getCursor('from');
          const newTo = codeMirror.getCursor('to');
          codeMirror.markText(newFrom, newTo, { className: 'cm-comment' });
        }
      }
      break;
    default:
      break;
  }
  codeMirror.focus();
};
