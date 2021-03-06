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
    if (lineTokenAry[0].includes('#')) {
      const sharpStr = lineTokenAry.shift();
      newString = lineTokenAry.join(' ');
      if (sharpStr !== hdrString) {
        newString = `${hdrString} ${newString}`;
      }
    } else {
      newString = `${hdrString} ${newString}`;
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
      if (codeMirror.getSelection() === '') {
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
          codeMirror.replaceSelection(`**${codeMirror.getSelection().trim()}**`);
          setSelection(0, 4);
        }
      }
      break;
    case 'italic':
      if (codeMirror.getSelection() === '') {
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
          codeMirror.replaceSelection(`*${codeMirror.getSelection().trim()}*`);
          setSelection(0, 2);
        }
      }
      break;
    case 'strike':
      if (codeMirror.getSelection() === '') {
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
          codeMirror.replaceSelection(`~~${codeMirror.getSelection().trim()}~~`);
          setSelection(0, 4);
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
        if (codeMirror.getSelection() === '') {
          const lineToken = codeMirror.getTokenAt(codeMirror.getCursor());
          const lineTokenAry = lineToken.string.split(' ');
          let pureString = lineToken.string;
          if (lineTokenAry[0].includes('>')) {
            lineTokenAry.shift();
            pureString = lineTokenAry.join(' ');
            codeMirror.replaceRange(
              `${pureString}`,
              { ch: lineToken.start, line: codeMirror.getCursor().line },
              { ch: lineToken.end, line: codeMirror.getCursor().line }
            );
          } else {
            codeMirror.replaceRange(
              `> ${pureString}`,
              { ch: lineToken.start, line: codeMirror.getCursor().line },
              { ch: lineToken.end, line: codeMirror.getCursor().line }
            );
          }
        } else {
          codeMirror.replaceSelection(`> ${codeMirror.getSelection().trim()}`);
        }
      }
      break;
    case 'link':
      // console.log('LINK');
      break;
    case 'image':
      {
        const inputElem = document.getElementById('image_upload_input');
        if (inputElem) {
          inputElem.click();
        }
      }
      break;
    default:
      break;
  }
  codeMirror.focus();
};
