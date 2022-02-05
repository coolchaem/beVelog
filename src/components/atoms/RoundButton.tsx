import React from 'react';
import { ThemeId } from '../../styles/emotion';
import theme from '../../styles/Theme';

interface RoundButtonProp {
  text: string;
  themeId: ThemeId;
  size?: 'SMALL' | 'DEFAULT' | 'LARGE';
  isBorder?: boolean;
  marginRight: string;
  imgPath?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const RoundButton = ({
  text,
  themeId,
  size = 'DEFAULT',
  isBorder = false,
  marginRight,
  imgPath,
  onClick,
}: React.PropsWithChildren<RoundButtonProp>) => {
  const height = size === 'SMALL' ? '1.5rem' : size === 'DEFAULT' ? '2rem' : '3rem';
  const padding = size === 'SMALL' ? '0.75rem' : size === 'DEFAULT' ? '1rem' : '2rem';
  const fontSize = size === 'SMALL' ? '0.875rem' : size === 'DEFAULT' ? '1rem' : '1.5rem';
  const borderRadius = size === 'SMALL' ? '0.75rem' : size === 'DEFAULT' ? '1rem' : '1.5rem';

  return (
    <button
      css={{
        height,
        color: isBorder ? theme[themeId].background : theme[themeId].color,
        backgroundColor: isBorder ? 'white' : `${theme[themeId].background}`,
        fontSize,
        fontWeight: 'bold',
        wordBreak: 'keep-all',
        // marginLeft: marginRight ?? '0.875rem',
        marginRight: marginRight ?? '0.875rem',
        paddingLeft: padding,
        paddingRight: padding,
        outline: 'none',
        border: isBorder ? `1px solid ${theme[themeId].background}` : 'none',
        borderRadius: borderRadius,
        cursor: 'pointer',
        transition: '0.125s all ease-in',
        '&:hover': {
          background: `${theme[themeId].background}`,
          color: 'white',
        },
        '&:focus': {
          boxShadow: '0px 2px 12px #00000030',
        },
        ['@media (maxWidth: 768px)']: {
          height: '1.Wem',
          fontSize: '0.75rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          borderRadius: '0.75rem',
          marginLeft: '0.5rem',
          marginRight: '0.5rem',
        },
      }}
      onClick={onClick}
    >
      {imgPath !== undefined && (
        <img
          src={imgPath}
          css={{ width: '0.75rem', height: '0.75rem', marginRight: '0.75rem' }}
          alt="RoundButtonImage"
        />
      )}
      {text}
    </button>
  );
};

export default RoundButton;
