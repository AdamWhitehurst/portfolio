export const Theme = {
  bgDark: '#3d3d3f',
  bgLight: '#f6f5f3',

  colorPrimaryLight: '#7dce94',
  colorPrimaryMid: '#2D984D',
  colorPrimaryDark: '#0E8031',
  colorAccentLight: '#f9f8fd',
  colorAccentMid: '#D3CCED',
  colorAccentDark: '#A194D1',

  textDark: '#020009',
  textLight: '#ECE9F9',
  titleFontFamily: 'Damion',
  contentFontFamily: 'Caveat',
  h2FontSize: '4em',

  borderRadius: '.75rem',
  outBoxShadow: '0px 1px 5px 1px rgba(7,1,28,0.5)',
  inBoxShadow: 'inset 0px 2px 3px 1px rgba(7,1,28,0.25)',
  outTextShadow: '0px 1px 2px rgba(7,1,28,0.5)',

  padding: '0.5rem',
  margin: '0.5rem',
  paddingSmall: '0.25rem',
  marginSmall: '0.25rem',
};

export const BasicContainer = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  minHeight: '100vh',
  minWidth: '100vw',
  boxSizing: 'border-box',
  backgroundColor: Theme.bgDark,
  padding: Theme.padding,
};

export const BasicContent = {
  flex: 1,
  minHeight: '10rem',
  minWidth: '10rem',
  backgroundColor: Theme.colorAccentDark,
  borderRadius: Theme.borderRadius,
  padding: Theme.paddingSmall,
  margin: Theme.margin,
  color: Theme.textDark,
  boxShadow: Theme.outBoxShadow,

};
export const BasicContentSecondary = {
  backgroundColor: Theme.colorPrimaryDark,
  boxShadow: Theme.inBoxShadow,
};

export const HeaderHeight = '2rem';