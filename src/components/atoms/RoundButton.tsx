import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeId } from '../../styles/emotion';
import theme from '../../styles/Theme';

interface Props {
  marginRight: string;
  size?: 'SMALL' | 'DEFAULT' | 'LARGE';
  label: string;
  isBorder?: boolean;
  themeId: ThemeId;
  to?: string;
}

const RoundButton = ({
  label,
  marginRight,
  size = 'DEFAULT',
  themeId,
  isBorder = false,
  to,
}: Props) => {
  const height = size === 'SMALL' ? '1.5rem' : size === 'DEFAULT' ? '2rem' : '3rem';
  const padding = size === 'SMALL' ? '0.75rem' : size === 'DEFAULT' ? '1rem' : '2rem';
  const fontSize = size === 'SMALL' ? '0.875rem' : size === 'DEFAULT' ? '1rem' : '1.5rem';
  const borderRadius = size === 'SMALL' ? '0.75rem' : size === 'DEFAULT' ? '1rem' : '1.5rem';

  const buttonStyle = css({
    paddingLeft: `${padding}`,
    paddingRight: `${padding}`,
    marginRight: `${marginRight}`,
    fontSize: `${fontSize}`,
    borderRadius: `${borderRadius}`,
    height: `${height}`,
    background: isBorder ? 'white' : `${theme[themeId].background}`,
    border: isBorder ? `1px solid ${theme[themeId].background}` : 'none',
    color: isBorder ? theme[themeId].background : theme[themeId].color,
    outline: 'none',
    fontWeight: 'bold',
    wordBreak: 'keep-all',
    cursor: 'pointer',
    transition: '0.125s all ease-in',
    '&:hover': {
      background: `${theme[themeId].background}`,
      color: 'white',
    },
    '&:focus': {
      boxShadow: '0px 2px 12px #00000030',
    },
  });

  return (
    <>
      {to && <Link to={to} css={buttonStyle} />}
      <button css={buttonStyle}>{label}</button>
    </>
  );
};

export default RoundButton;
