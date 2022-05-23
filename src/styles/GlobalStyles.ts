import { Interpolation, Theme, css } from '@emotion/react';
import { darkTheme, lightTheme } from './Theme';

const globalStyles: Interpolation<Theme> = css`
  * {
    margin: 0;
    padding: 0;
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Apple SD Gothic Neo',
      'Malgun Gothic', '맑은 고딕', '나눔고딕', 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR',
      arial, '돋움', 'Dotum', Tahoma, 'Geneva', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  body {
    ${lightTheme}
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
    }
  }

  body[data-theme='light'] {
    ${lightTheme}
  }

  body[data-theme='dark'] {
    ${darkTheme}
  }
`;

export default globalStyles;
