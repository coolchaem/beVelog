import '@emotion/react';

type ThemeId = 'teal' | 'lightGray' | 'gray' | 'darkGray' | 'transparent' | 'red';

declare module '@emotion/react' {
  export interface Theme {
    [key in ThemeId]: {
      background: string;
      color: string;
      hoverBackground: string;
    };
  }
}
