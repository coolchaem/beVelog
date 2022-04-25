const color = {
  /* teal */
  teal0: '#F3FFFB',
  teal1: '#C3FAE8',
  teal2: '#96F2D7',
  teal3: '#63E6BE',
  teal4: '#38D9A9',
  teal5: '#20C997',
  teal6: '#12B886',
  teal7: '#0CA678',
  teal8: '#099268',
  teal9: '#087F5B',
  /* gray */
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',
  /* red */
  red0: '#fff5f5',
  red1: '#ffe3e3',
  red2: '#ffc9c9',
  red3: '#ffa8a8',
  red4: '#ff8787',
  red5: '#ff6b6b',
  red6: '#fa5252',
  red7: '#f03e3e',
  red8: '#e03131',
  red9: '#c92a2a',
};

export const pallete = {
  teal: {
    background: color.teal6,
    color: 'white',
    hoverBackground: color.teal5,
  },
  lightGray: {
    background: color.gray2,
    color: color.gray7,
    hoverBackground: color.gray1,
  },
  gray: {
    background: color.gray6,
    color: 'white',
    hoverBackground: color.gray5,
  },
  darkGray: {
    background: color.gray8,
    color: 'white',
    hoverBackground: color.gray6,
  },
  transparent: {
    background: 'none',
    color: color.teal6,
    hoverBackground: color.teal1,
  },
  red: {
    background: color.red5,
    color: 'white',
    hoverBackground: color.red4,
  },
};

export type PalleteId = keyof typeof pallete;

export default pallete;
