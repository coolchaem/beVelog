interface ThemeVariables {
  bg_page1: string;
  bg_page2: string;
  bg_element1: string;
  bg_element2: string;
  bg_element3: string;
  bg_element4: string;
  bg_element5: string;
  bg_element6: string;
  bg_element7: string;
  bg_element8: string;
  bg_invert: string;
  bg_inline_code: string;
  bg_tag: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  border1: string;
  border2: string;
  border3: string;
  border4: string;
  primary1: string;
  primary2: string;
  destructive1: string;
  destructive2: string;
  button_text: string;

  slight_layer: string;
  opaque_layer: string;
  editor_footer: string;

  prism_bg: string;
  prism_default_text: string;
  prism_selection_bg: string;
  prism_code_block_bg: string;
  prism_code_1: string;
  prism_code_2: string;
  prism_code_3: string;
  prism_code_4: string;
  prism_code_5: string;
  prism_code_6: string;
  prism_code_7: string;
  prism_code_8: string;
  prism_code_9: string;
  prism_line_number: string;
}

const lightThemeVariables: ThemeVariables = {
  bg_page1: '#F8F9FA',
  bg_page2: '#FFFFFF',
  bg_element1: '#FFFFFF',
  bg_element2: '#F8F9FA',
  bg_element3: '#E9ECEF',
  bg_element4: '#DEE2E6',
  bg_element5: '#212529',
  bg_element6: '#343A40',
  bg_element7: '#FFFFFF',
  bg_element8: '#FBFDFC',
  bg_invert: '#1E1E1E',
  bg_inline_code: '#E9ECEF',
  bg_tag: '#F8F9FA',

  text1: '#212529',
  text2: '#495057',
  text3: '#868E96',
  text4: '#CED4DA',
  border1: '#343A40',
  border2: '#ADB5BD',
  border3: '#DEE2E6',
  border4: '#F1F3F5',
  primary1: '#12B886',
  primary2: '#20C997',
  destructive1: '#FF6B6B',
  destructive2: '#FF8787',
  button_text: '#FFFFFF',

  slight_layer: 'rgba(0,0,0,0.05)',
  opaque_layer: 'rgba(249,249,249,0.85)',
  editor_footer: '#FFFFFF',

  prism_bg: '#fbfcfd',
  prism_default_text: '#24292e',
  prism_selection_bg: 'rgba(0,0,0,0.15)',
  prism_code_block_bg: '#fbfcfd',
  prism_code_1: '#969896',
  prism_code_2: '#24292e',
  prism_code_3: '#a626a4',
  prism_code_4: '#63a35c',
  prism_code_5: '#0184bc',
  prism_code_6: '#50a14f',
  prism_code_7: '#a626a4',
  prism_code_8: '#005cc5',
  prism_code_9: '#a626a4',
  prism_line_number: '#585c63',
};

const darkThemeVariables: ThemeVariables = {
  bg_page1: '#121212',
  bg_page2: '#121212',
  bg_element1: '#1E1E1E',
  bg_element2: '#1E1E1E',
  bg_element3: '#252525',
  bg_element4: '#2E2E2E',
  bg_element5: '#F1F3F5',
  bg_element6: '#F8F9FA',
  bg_element7: '#252525',
  bg_element8: '#0c0c0c',
  bg_invert: '#FFFFFF',
  bg_inline_code: '#363636',
  bg_tag: '#252525',
  text1: '#ECECEC',
  text2: '#D9D9D9',
  text3: '#ACACAC',
  text4: '#595959',
  border1: '#E0E0E0',
  border2: '#A0A0A0',
  border3: '#4D4D4D',
  border4: '#2A2A2A',
  primary1: '#96F2D7',
  primary2: '#63E6BE',
  destructive1: '#FFC9C9',
  destructive2: '#FFA8A8',
  button_text: '#121212',

  slight_layer: 'rgba(255,255,255,0.1)',
  opaque_layer: 'rgba(0, 0, 0, 0.85)',
  editor_footer: '#2E2E2E',

  prism_bg: '#1E1E1E',
  prism_default_text: '#e0e6f1',
  prism_selection_bg: '#383e49',
  prism_code_block_bg: '#1e1e1e',
  prism_code_1: '#7c858d',
  prism_code_2: '#abb2bf',
  prism_code_3: '#e06c75',
  prism_code_4: '#d19a66',
  prism_code_5: '#98c379',
  prism_code_6: '#56b6c2',
  prism_code_7: '#c678dd',
  prism_code_8: '#61afef',
  prism_code_9: '#c678dd',
  prism_line_number: '#5c6370',
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

//  bg_page1: '#F8F9FA' -> --bg-page1:'#F8F9FA;' string 으로
export const lightTheme: string = (
  Object.keys(lightThemeVariables) as Array<keyof ThemeVariables>
).reduce((acc, key) => {
  return acc.concat(`--${key.replace(/_/g, '-')}: ${lightThemeVariables[key]};`, '\n');
}, '');

export const darkTheme: string = (
  Object.keys(darkThemeVariables) as Array<keyof ThemeVariables>
).reduce((acc, key) => {
  return acc.concat(`--${key.replace(/_/g, '-')}: ${darkThemeVariables[key]};`, '\n');
}, '');

// theme.bg_page1 가 var(--bg-page1) 참조
const theme = (Object.keys(lightThemeVariables) as Array<keyof ThemeVariables>).reduce(
  (acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  },
  {} as ThemeVariables
);

export type ThemeMode = 'light' | 'dark';

export default theme;
